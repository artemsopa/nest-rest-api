import { BankEntity } from '@/banks/entities/bank.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
  AfterLoad,
} from 'typeorm';
import { TransactionToCategoryEntity } from '@/transactions/entities/transaction-to-category.entity';
import { TransactionTypeEnum } from '@/common/enums/transaction-type.enum';

@Entity({ name: 'transactions' })
export class TransactionEntity {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ type: 'decimal', scale: 2, nullable: false })
  public amount: number;

  @AfterLoad() _convertNumerics() {
    this.amount = parseFloat(this.amount.toString());
  }

  @Column({ type: 'enum', enum: TransactionTypeEnum, nullable: false })
  public type: string;

  @Column({ name: 'bank_id', nullable: false })
  public bankId: string;
  @ManyToOne(() => BankEntity, (bank) => bank.transactions, {
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'bank_id' })
  public bank: BankEntity;

  @OneToMany(
    () => TransactionToCategoryEntity,
    (transactionToCategory) => transactionToCategory.transaction,
  )
  public transactionToCategories: TransactionToCategoryEntity[];
}
