"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionListSchemaDto = void 0;
const nestjs_zod_1 = require("nestjs-zod");
const z_1 = require("nestjs-zod/z");
const transaction_dto_1 = require("./transaction.dto");
const TransactionListSchema = z_1.z.object({
    count: z_1.z.number(),
    data: transaction_dto_1.TransactionSchema,
});
class TransactionListSchemaDto extends (0, nestjs_zod_1.createZodDto)(TransactionListSchema) {
}
exports.TransactionListSchemaDto = TransactionListSchemaDto;
//# sourceMappingURL=transaction-list.dto.js.map