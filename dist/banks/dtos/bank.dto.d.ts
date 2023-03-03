import { z } from 'nestjs-zod/z';
declare const BankDto_base: import("nestjs-zod").ZodDto<{
    name: string;
    id: string;
    balance: number;
}, z.ZodObjectDef<{
    id: z.ZodString;
    name: z.ZodString;
    balance: z.ZodNumber;
}, "strip", z.ZodTypeAny>, {
    name: string;
    id: string;
    balance: number;
}>;
export declare class BankDto extends BankDto_base {
}
export {};
