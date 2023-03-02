import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';
import { TransactionSchema } from '@/transactions/dtos/transaction.dto';

const TransactionListSchema = z.object({
  count: z.number(),
  data: TransactionSchema,
});

export class TransactionListSchemaDto extends createZodDto(
  TransactionListSchema,
) {}
