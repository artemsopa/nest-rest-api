import { z } from 'nestjs-zod/z';
declare const BankCreateDto_base: import("nestjs-zod").ZodDto<{
    name: string;
}, z.ZodObjectDef<{
    name: z.ZodString;
}, "strip", z.ZodTypeAny>, {
    name: string;
}>;
export declare class BankCreateDto extends BankCreateDto_base {
}
export {};
