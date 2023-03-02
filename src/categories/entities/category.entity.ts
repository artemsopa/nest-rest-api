import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { TransactionToCategoryEntity } from '@/transactions/entities/transaction-to-category.entity';

@Entity({ name: 'categories' })
export class CategoryEntity {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ unique: true, nullable: false })
  public name: string;

  @OneToMany(
    () => TransactionToCategoryEntity,
    (transactionToCategory) => transactionToCategory.category,
  )
  public transactionToCategories: TransactionToCategoryEntity[];
}
