import { Repository } from 'typeorm';
import { BankCreateDto } from '@/banks/dtos/bank-create.dto';
import { BankUpdateDto } from '@/banks/dtos/bank-update.dto';
import { BankEntity } from '@/banks/entities/bank.entity';
export declare class BanksService {
    private readonly banksRepository;
    constructor(banksRepository: Repository<BankEntity>);
    getAll: () => Promise<BankEntity[]>;
    getOneById: (id: string) => Promise<BankEntity>;
    create: (bankInput: BankCreateDto) => Promise<string>;
    update: (id: string, bankInput: BankUpdateDto) => Promise<void>;
    delete: (id: string) => Promise<void>;
}
