"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankDto = void 0;
const nestjs_zod_1 = require("nestjs-zod");
const z_1 = require("nestjs-zod/z");
const BankSchema = z_1.z.object({
    id: z_1.z.string(),
    name: z_1.z.string(),
    balance: z_1.z.number(),
});
class BankDto extends (0, nestjs_zod_1.createZodDto)(BankSchema) {
}
exports.BankDto = BankDto;
//# sourceMappingURL=bank.dto.js.map