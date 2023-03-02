import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

const BankSchema = z.object({
  id: z.string(),
  name: z.string(),
  balance: z.number(),
});

export class BankDto extends createZodDto(BankSchema) {}
