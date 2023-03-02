import { Repository } from 'typeorm';
import { TransactionToCategoryDto } from '@/statistics/dtos/transaction-to-category.dto';
import { TransactionToCategoryEntity } from '@/transactions/entities/transaction-to-category.entity';
export declare class StatisticsRepository {
    private readonly transactionToCategoriesRepository;
    constructor(transactionToCategoriesRepository: Repository<TransactionToCategoryEntity>);
    getTransactionToCategoriesByCategoryIdsAndPeriod: (categoryIds: string[], fromPeriod: Date, toPeriod: Date) => Promise<TransactionToCategoryDto[]>;
}
