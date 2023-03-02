import { MiddlewareConsumer, Module } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ZodValidationPipe } from 'nestjs-zod';
import { configsService } from '@/configs/configs.service';
import { BanksModule } from '@/banks/banks.module';
import { CategoriesModule } from '@/categories/categories.module';
import { TransactionsModule } from '@/transactions/transactions.module';
import { StatisticsModule } from '@/statistics/statistics.module';
import { LoggerMiddleware } from '@/common/middlewares/logger.middleware';
import { DatabaseLogger } from '@/common/logger/database.logger';
import { WebhooksModule } from '@/webhooks/webhooks.module';

@Module({
  imports: [
    BanksModule,
    CategoriesModule,
    TransactionsModule,
    StatisticsModule,
    WebhooksModule,
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        ...configsService.getTypeOrmConfig(),
        logger: new DatabaseLogger(),
      }),
    }),
  ],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ZodValidationPipe,
    },
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
