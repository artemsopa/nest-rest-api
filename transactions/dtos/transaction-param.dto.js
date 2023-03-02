"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionParamDto = void 0;
const nestjs_zod_1 = require("nestjs-zod");
const z_1 = require("nestjs-zod/z");
const TransactionParamSchema = z_1.z.object({
    id: z_1.z.string({
        required_error: 'Path parameter "id" is required',
        invalid_type_error: 'Parameter "id" must be a string!',
    }),
});
class TransactionParamDto extends (0, nestjs_zod_1.createZodDto)(TransactionParamSchema) {
}
exports.TransactionParamDto = TransactionParamDto;
//# sourceMappingURL=transaction-param.dto.js.map