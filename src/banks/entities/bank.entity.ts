import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  AfterLoad,
} from 'typeorm';
import { TransactionEntity } from '@/transactions/entities/transaction.entity';

@Entity({ name: 'banks' })
export class BankEntity {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ unique: true, nullable: false })
  public name: string;

  @Column({ type: 'decimal', default: 0, scale: 2, nullable: false })
  public balance: number;

  @AfterLoad() _convertNumerics() {
    this.balance = parseFloat(this.balance.toString());
  }

  @OneToMany(() => TransactionEntity, (transaction) => transaction.bank)
  public transactions: TransactionEntity[];
}
