import { z } from 'nestjs-zod/z';
declare const TransactionParamDto_base: import("nestjs-zod").ZodDto<{
    id: string;
}, z.ZodObjectDef<{
    id: z.ZodString;
}, "strip", z.ZodTypeAny>, {
    id: string;
}>;
export declare class TransactionParamDto extends TransactionParamDto_base {
}
export {};
