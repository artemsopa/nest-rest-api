import { TransactionToCategoryEntity } from '@/transactions/entities/transaction-to-category.entity';
export declare class CategoryEntity {
    id: string;
    name: string;
    transactionToCategories: TransactionToCategoryEntity[];
}
