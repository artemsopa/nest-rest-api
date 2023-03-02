import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TransactionToCategoryDto } from '@/statistics/dtos/transaction-to-category.dto';
import { TransactionToCategoryEntity } from '@/transactions/entities/transaction-to-category.entity';

export class StatisticsRepository {
  constructor(
    @InjectRepository(TransactionToCategoryEntity)
    private readonly transactionToCategoriesRepository: Repository<TransactionToCategoryEntity>,
  ) {}

  public getTransactionToCategoriesByCategoryIdsAndPeriod = async (
    categoryIds: string[],
    fromPeriod: Date,
    toPeriod: Date,
  ): Promise<TransactionToCategoryDto[]> => {
    const data = await this.transactionToCategoriesRepository
      .createQueryBuilder('transaction_to_categories')
      .leftJoin('transaction_to_categories.transaction', 'transactions')
      .addSelect(['transactions.amount'])
      .leftJoin('transaction_to_categories.category', 'categories')
      .addSelect(['categories.name'])
      .where('categories.id IN (:...categoryIds)', {
        categoryIds: [null, ...categoryIds],
      })
      .andWhere(
        `transaction_to_categories.created_at BETWEEN :fromPeriod AND :toPeriod`,
        {
          fromPeriod,
          toPeriod,
        },
      )
      .orderBy('transaction_to_categories.created_at')
      .getMany();

    return data;
  };
}
