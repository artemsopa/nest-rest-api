import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

const CategorySchema = z.object({
  id: z.string(),
  name: z.string(),
});

export class CategoryDto extends createZodDto(CategorySchema) {}
