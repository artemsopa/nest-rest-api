import { z } from 'nestjs-zod/z';
declare const CategoryDto_base: import("nestjs-zod").ZodDto<{
    name: string;
    id: string;
}, z.ZodObjectDef<{
    id: z.ZodString;
    name: z.ZodString;
}, "strip", z.ZodTypeAny>, {
    name: string;
    id: string;
}>;
export declare class CategoryDto extends CategoryDto_base {
}
export {};
