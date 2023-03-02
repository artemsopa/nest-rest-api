import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BanksController } from '@/banks/banks.controller';
import { BanksService } from '@/banks/banks.service';
import { BankEntity } from '@/banks/entities/bank.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BankEntity])],
  controllers: [BanksController],
  providers: [BanksService],
})
export class BanksModule {}
