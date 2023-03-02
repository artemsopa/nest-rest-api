import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BankCreateDto } from '@/banks/dtos/bank-create.dto';
import { BankUpdateDto } from '@/banks/dtos/bank-update.dto';
import { BankEntity } from '@/banks/entities/bank.entity';

@Injectable()
export class BanksService {
  constructor(
    @InjectRepository(BankEntity)
    private readonly banksRepository: Repository<BankEntity>,
  ) {}

  public getAll = async (): Promise<BankEntity[]> => {
    return await this.banksRepository.find();
  };

  public getOneById = async (id: string): Promise<BankEntity> => {
    const bank = await this.banksRepository.findOneBy({ id });
    if (!bank) {
      throw new HttpException(`Cannot find bank with id "${id}"`, 422);
    }
    return bank;
  };

  public create = async (bankInput: BankCreateDto): Promise<string> => {
    const bank = await this.banksRepository.findOneBy({ name: bankInput.name });
    if (bank) {
      throw new HttpException(
        `Bank with name "${bankInput.name}" already exists`,
        400,
      );
    }
    const {
      raw: [{ id }],
    } = await this.banksRepository.insert(bankInput);
    return id;
  };

  public update = async (
    id: string,
    bankInput: BankUpdateDto,
  ): Promise<void> => {
    const bank = await this.banksRepository.findOneBy({ id });
    if (!bank) {
      throw new HttpException(`Cannot find bank by id ${id}`, 400);
    }
    await this.banksRepository.update(
      { id },
      { ...bankInput, balance: bank.balance },
    );
  };

  public delete = async (id: string): Promise<void> => {
    const { affected } = await this.banksRepository.delete(id);
    if (affected === 0) {
      throw new HttpException(`Cannot find bank by id ${id}`, 400);
    }
  };
}
