import { DataSource } from 'typeorm';
import { TransactionCreateDto } from '@/transactions/dtos/transaction-create.dto';
import { TransactionEntity } from '@/transactions/entities/transaction.entity';
import { Pagination } from '@/common/dtos/pagination.dto';
export declare class TransactionsService {
    private readonly dataSource;
    constructor(dataSource: DataSource);
    getAllWithPagination: (take?: number | undefined, skip?: number | undefined) => Promise<Pagination<TransactionEntity[]>>;
    create: (transaction: TransactionCreateDto) => Promise<string>;
    delete: (id: string) => Promise<void>;
}
