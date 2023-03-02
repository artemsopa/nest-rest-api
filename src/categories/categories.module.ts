import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesController } from '@/categories/categories.controller';
import { CategoriesService } from '@/categories/categories.service';
import { TransactionToCategoryEntity } from '@/transactions/entities/transaction-to-category.entity';
import { CategoryEntity } from '@/categories/entities/category.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([CategoryEntity, TransactionToCategoryEntity]),
  ],
  controllers: [CategoriesController],
  providers: [CategoriesService],
})
export class CategoriesModule {}
