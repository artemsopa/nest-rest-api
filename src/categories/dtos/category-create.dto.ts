import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

const CategoryCreateSchema: z.ZodSchema = z.object({
  name: z.string({
    required_error: 'Property "name" is required',
    invalid_type_error: 'Property "name" must be a string!',
  }),
});

export class CategoryCreateDto extends createZodDto(CategoryCreateSchema) {}
