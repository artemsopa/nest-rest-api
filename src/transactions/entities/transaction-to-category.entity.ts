import { CategoryEntity } from '@/categories/entities/category.entity';
import {
  Entity,
  CreateDateColumn,
  PrimaryColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { TransactionEntity } from '@/transactions/entities/transaction.entity';

@Entity({ name: 'transaction_to_categories' })
export class TransactionToCategoryEntity {
  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    nullable: false,
  })
  public createdAt: Date;

  @PrimaryColumn({ name: 'transaction_id' })
  public transactionId: string;
  @ManyToOne(
    () => TransactionEntity,
    (transaction) => transaction.transactionToCategories,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'transaction_id' })
  public transaction: TransactionEntity;

  @PrimaryColumn({ name: 'category_id' })
  public categoryId: string;
  @ManyToOne(
    () => CategoryEntity,
    (category) => category.transactionToCategories,
    {
      onDelete: 'RESTRICT',
    },
  )
  @JoinColumn({ name: 'category_id' })
  public category: CategoryEntity;
}
