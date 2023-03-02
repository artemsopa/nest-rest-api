import { HttpException, Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { TransactionCreateDto } from '@/transactions/dtos/transaction-create.dto';
import { TransactionToCategoryEntity } from '@/transactions/entities/transaction-to-category.entity';
import { TransactionEntity } from '@/transactions/entities/transaction.entity';
import { BankEntity } from '@/banks/entities/bank.entity';
import { TransactionTypeEnum } from '@/common/enums/transaction-type.enum';
import { Pagination } from '@/common/dtos/pagination.dto';

@Injectable()
export class TransactionsService {
  constructor(private readonly dataSource: DataSource) {}

  public getAllWithPagination = async (
    take: number | undefined = 0,
    skip: number | undefined = 1,
  ): Promise<Pagination<TransactionEntity[]>> => {
    const [data, count] = await this.dataSource
      .getRepository(TransactionEntity)
      .findAndCount({
        take,
        skip: take * (skip - 1),
      });
    return {
      count,
      data,
    };
  };

  public create = async (
    transaction: TransactionCreateDto,
  ): Promise<string> => {
    return await this.dataSource.transaction(async (manager) => {
      const {
        raw: [{ id: transactionId }],
      } = await manager.getRepository(TransactionEntity).insert({
        ...transaction,
        type:
          transaction.amount >= 0
            ? TransactionTypeEnum.PROFITABLE
            : TransactionTypeEnum.CUNSUMABLE,
      });

      const transactionToCategoriesToSave = transaction.categoryIds.map(
        (categoryId) => ({
          transactionId,
          categoryId,
        }),
      );

      await manager
        .getRepository(TransactionToCategoryEntity)
        .insert(transactionToCategoriesToSave);

      const bankRepository = manager.getRepository(BankEntity);
      const bank = await bankRepository.findOneBy({ id: transaction.bankId });
      if (bank) {
        bank.balance += transaction.amount;
        await bankRepository.save(bank);
      }

      return transactionId;
    });
  };

  public delete = async (id: string): Promise<void> => {
    await this.dataSource.transaction(async (manager) => {
      const transactionsRepository = manager.getRepository(TransactionEntity);
      const transaction = await transactionsRepository.findOneBy({ id });
      if (!transaction) {
        throw new HttpException(`Cannot find transaction by id ${id}`, 400);
      }
      await transactionsRepository.delete(id);

      const banksRepository = manager.getRepository(BankEntity);
      const bank = await banksRepository.findOneBy({ id: transaction.bankId });
      if (bank) {
        bank.balance -= transaction.amount;
        await banksRepository.save(bank);
      }
    });
  };
}
