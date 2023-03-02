import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

export interface CategoryStatistic {
  [categoryName: string]: number;
}

const CategoryStatisticSchema: z.ZodSchema<CategoryStatistic> = z.object({
  categoryName: z.number(),
});

export class CategoryStatisticDto extends createZodDto(
  CategoryStatisticSchema,
) {}
