import { z } from 'nestjs-zod/z';
declare const BankParamDto_base: import("nestjs-zod").ZodDto<{
    id: string;
}, z.ZodObjectDef<{
    id: z.ZodString;
}, "strip", z.ZodTypeAny>, {
    id: string;
}>;
export declare class BankParamDto extends BankParamDto_base {
}
export {};
