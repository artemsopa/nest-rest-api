export interface TransactionToCategoryDto {
  transactionId: string;
  categoryId: string;
  category: {
    name: string;
  };
  transaction: {
    amount: number;
  };
}
