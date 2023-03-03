import { z } from 'nestjs-zod/z';
declare const CategoryParamDto_base: import("nestjs-zod").ZodDto<{
    id: string;
}, z.ZodObjectDef<{
    id: z.ZodString;
}, "strip", z.ZodTypeAny>, {
    id: string;
}>;
export declare class CategoryParamDto extends CategoryParamDto_base {
}
export {};
