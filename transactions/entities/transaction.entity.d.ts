import { BankEntity } from '@/banks/entities/bank.entity';
import { TransactionToCategoryEntity } from '@/transactions/entities/transaction-to-category.entity';
export declare class TransactionEntity {
    id: string;
    amount: number;
    _convertNumerics(): void;
    type: string;
    bankId: string;
    bank: BankEntity;
    transactionToCategories: TransactionToCategoryEntity[];
}
