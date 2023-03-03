import { z } from 'nestjs-zod/z';
declare const TransactionListSchemaDto_base: import("nestjs-zod").ZodDto<{
    data: {
        type: import("../../common/enums/transaction-type.enum").TransactionTypeEnum;
        id: string;
        amount: string;
        bankId: string;
    };
    count: number;
}, z.ZodObjectDef<{
    count: z.ZodNumber;
    data: z.ZodObject<{
        id: z.ZodString;
        amount: z.ZodString;
        type: z.ZodEnum<[import("../../common/enums/transaction-type.enum").TransactionTypeEnum.PROFITABLE, import("../../common/enums/transaction-type.enum").TransactionTypeEnum.CUNSUMABLE]>;
        bankId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: import("../../common/enums/transaction-type.enum").TransactionTypeEnum;
        id: string;
        amount: string;
        bankId: string;
    }, {
        type: import("../../common/enums/transaction-type.enum").TransactionTypeEnum;
        id: string;
        amount: string;
        bankId: string;
    }>;
}, "strip", z.ZodTypeAny>, {
    data: {
        type: import("../../common/enums/transaction-type.enum").TransactionTypeEnum;
        id: string;
        amount: string;
        bankId: string;
    };
    count: number;
}>;
export declare class TransactionListSchemaDto extends TransactionListSchemaDto_base {
}
export {};
