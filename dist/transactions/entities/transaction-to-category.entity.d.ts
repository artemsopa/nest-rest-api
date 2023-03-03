import { CategoryEntity } from '@/categories/entities/category.entity';
import { TransactionEntity } from '@/transactions/entities/transaction.entity';
export declare class TransactionToCategoryEntity {
    createdAt: Date;
    transactionId: string;
    transaction: TransactionEntity;
    categoryId: string;
    category: CategoryEntity;
}
