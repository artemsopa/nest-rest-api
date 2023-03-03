import { z } from 'nestjs-zod/z';
import { TransactionTypeEnum } from '@/common/enums/transaction-type.enum';
export declare const TransactionSchema: z.ZodObject<{
    id: z.ZodString;
    amount: z.ZodString;
    type: z.ZodEnum<[TransactionTypeEnum.PROFITABLE, TransactionTypeEnum.CUNSUMABLE]>;
    bankId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: TransactionTypeEnum;
    id: string;
    amount: string;
    bankId: string;
}, {
    type: TransactionTypeEnum;
    id: string;
    amount: string;
    bankId: string;
}>;
declare const TransactionDto_base: import("nestjs-zod").ZodDto<{
    type: TransactionTypeEnum;
    id: string;
    amount: string;
    bankId: string;
}, z.ZodObjectDef<{
    id: z.ZodString;
    amount: z.ZodString;
    type: z.ZodEnum<[TransactionTypeEnum.PROFITABLE, TransactionTypeEnum.CUNSUMABLE]>;
    bankId: z.ZodString;
}, "strip", z.ZodTypeAny>, {
    type: TransactionTypeEnum;
    id: string;
    amount: string;
    bankId: string;
}>;
export declare class TransactionDto extends TransactionDto_base {
}
export {};
