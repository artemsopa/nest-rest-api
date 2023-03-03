import { z } from 'nestjs-zod/z';
declare const TransactionQueryDto_base: import("nestjs-zod").ZodDto<{
    perPage: number;
    pageNo: number;
}, z.ZodObjectDef<{
    perPage: z.ZodDefault<z.ZodEffects<z.ZodNumber, number, number>>;
    pageNo: z.ZodDefault<z.ZodEffects<z.ZodNumber, number, number>>;
}, "strip", z.ZodTypeAny>, {
    perPage?: number | undefined;
    pageNo?: number | undefined;
}>;
export declare class TransactionQueryDto extends TransactionQueryDto_base {
}
export {};
