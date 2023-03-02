import { TransactionEntity } from '@/transactions/entities/transaction.entity';
export declare class BankEntity {
    id: string;
    name: string;
    balance: number;
    _convertNumerics(): void;
    transactions: TransactionEntity[];
}
