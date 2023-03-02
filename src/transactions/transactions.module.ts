import { Module } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionsController } from '@/transactions/transactions.controller';
import { TransactionsService } from '@/transactions/transactions.service';
import { TransactionEntity } from '@/transactions/entities/transaction.entity';
import { CategoryEntity } from '@/categories/entities/category.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([DataSource, CategoryEntity, TransactionEntity]),
  ],
  controllers: [TransactionsController],
  providers: [TransactionsService],
})
export class TransactionsModule {}
