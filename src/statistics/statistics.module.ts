import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StatisticsController } from '@/statistics/statistics.controller';
import { StatisticsService } from '@/statistics/statistics.service';
import { StatisticsRepository } from '@/statistics/statistics.repository';
import { TransactionToCategoryEntity } from '@/transactions/entities/transaction-to-category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TransactionToCategoryEntity])],
  controllers: [StatisticsController],
  providers: [StatisticsService, StatisticsRepository],
})
export class StatisticsModule {}
