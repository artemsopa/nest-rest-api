import { z } from 'nestjs-zod/z';
declare const CategoryUpdateDto_base: import("nestjs-zod").ZodDto<{
    name: string;
}, z.ZodObjectDef<{
    name: z.ZodString;
}, "strip", z.ZodTypeAny>, {
    name: string;
}>;
export declare class CategoryUpdateDto extends CategoryUpdateDto_base {
}
export {};
