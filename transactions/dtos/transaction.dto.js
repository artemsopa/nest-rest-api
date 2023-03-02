"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionDto = exports.TransactionSchema = void 0;
const nestjs_zod_1 = require("nestjs-zod");
const z_1 = require("nestjs-zod/z");
const transaction_type_enum_1 = require("../../common/enums/transaction-type.enum");
exports.TransactionSchema = z_1.z.object({
    id: z_1.z.string(),
    amount: z_1.z.string(),
    type: z_1.z.enum([
        transaction_type_enum_1.TransactionTypeEnum.PROFITABLE,
        transaction_type_enum_1.TransactionTypeEnum.CUNSUMABLE,
    ]),
    bankId: z_1.z.string(),
});
class TransactionDto extends (0, nestjs_zod_1.createZodDto)(exports.TransactionSchema) {
}
exports.TransactionDto = TransactionDto;
//# sourceMappingURL=transaction.dto.js.map