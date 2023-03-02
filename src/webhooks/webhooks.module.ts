import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { WebhooksController } from '@/webhooks/webhooks.controller';
import { TransactionsService } from '@/transactions/transactions.service';
import { TransactionEntity } from '@/transactions/entities/transaction.entity';
import { CategoryEntity } from '@/categories/entities/category.entity';

@Module({
  imports: [
    HttpModule,
    TypeOrmModule.forFeature([DataSource, CategoryEntity, TransactionEntity]),
  ],
  controllers: [WebhooksController],
  providers: [TransactionsService],
})
export class WebhooksModule {}
