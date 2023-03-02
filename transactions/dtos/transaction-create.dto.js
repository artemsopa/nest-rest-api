"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionCreateDto = void 0;
const nestjs_zod_1 = require("nestjs-zod");
const z_1 = require("nestjs-zod/z");
const TransactionCreateSchema = z_1.z.object({
    amount: z_1.z.number({
        required_error: 'Property "amount" is required',
        invalid_type_error: 'Property "amount" must be a number!',
    }),
    bankId: z_1.z.string({
        required_error: 'Property "bankId" is required',
        invalid_type_error: 'Property "bankId" must be a string!',
    }),
    categoryIds: z_1.z.array(z_1.z.string({
        invalid_type_error: 'Item of array "categoryIds" must be a string!',
    }), {
        required_error: 'Property "categoryIds" is required',
        invalid_type_error: 'Property "categoryIds" must be an array!',
    }),
});
class TransactionCreateDto extends (0, nestjs_zod_1.createZodDto)(TransactionCreateSchema) {
}
exports.TransactionCreateDto = TransactionCreateDto;
//# sourceMappingURL=transaction-create.dto.js.map