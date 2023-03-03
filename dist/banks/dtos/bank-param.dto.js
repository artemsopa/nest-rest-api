"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankParamDto = void 0;
const nestjs_zod_1 = require("nestjs-zod");
const z_1 = require("nestjs-zod/z");
const BankParamSchema = z_1.z.object({
    id: z_1.z.string({
        required_error: 'Path parameter "id" is required',
        invalid_type_error: 'Parameter "id" must be a string!',
    }),
});
class BankParamDto extends (0, nestjs_zod_1.createZodDto)(BankParamSchema) {
}
exports.BankParamDto = BankParamDto;
//# sourceMappingURL=bank-param.dto.js.map