import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

const TransactionCreateSchema: z.ZodSchema = z.object({
  amount: z.number({
    required_error: 'Property "amount" is required',
    invalid_type_error: 'Property "amount" must be a number!',
  }),
  bankId: z.string({
    required_error: 'Property "bankId" is required',
    invalid_type_error: 'Property "bankId" must be a string!',
  }),
  categoryIds: z.array(
    z.string({
      invalid_type_error: 'Item of array "categoryIds" must be a string!',
    }),
    {
      required_error: 'Property "categoryIds" is required',
      invalid_type_error: 'Property "categoryIds" must be an array!',
    },
  ),
});

export class TransactionCreateDto extends createZodDto(
  TransactionCreateSchema,
) {}
