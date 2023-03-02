import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';
import { TransactionTypeEnum } from '@/common/enums/transaction-type.enum';

export const TransactionSchema = z.object({
  id: z.string(),
  amount: z.string(),
  type: z.enum([
    TransactionTypeEnum.PROFITABLE,
    TransactionTypeEnum.CUNSUMABLE,
  ]),
  bankId: z.string(),
});

export class TransactionDto extends createZodDto(TransactionSchema) {}
