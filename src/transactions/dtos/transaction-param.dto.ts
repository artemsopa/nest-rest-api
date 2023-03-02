import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

const TransactionParamSchema = z.object({
  id: z.string({
    required_error: 'Path parameter "id" is required',
    invalid_type_error: 'Parameter "id" must be a string!',
  }),
});

export class TransactionParamDto extends createZodDto(TransactionParamSchema) {}
