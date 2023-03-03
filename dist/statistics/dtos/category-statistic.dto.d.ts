import { z } from 'nestjs-zod/z';
export interface CategoryStatistic {
    [categoryName: string]: number;
}
declare const CategoryStatisticDto_base: import("nestjs-zod").ZodDto<CategoryStatistic, z.ZodTypeDef, CategoryStatistic>;
export declare class CategoryStatisticDto extends CategoryStatisticDto_base {
}
export {};
