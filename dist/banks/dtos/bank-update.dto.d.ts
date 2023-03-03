import { z } from 'nestjs-zod/z';
declare const BankUpdateDto_base: import("nestjs-zod").ZodDto<{
    name: string;
}, z.ZodObjectDef<{
    name: z.ZodString;
}, "strip", z.ZodTypeAny>, {
    name: string;
}>;
export declare class BankUpdateDto extends BankUpdateDto_base {
}
export {};
