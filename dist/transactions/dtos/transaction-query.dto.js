"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionQueryDto = void 0;
const nestjs_zod_1 = require("nestjs-zod");
const z_1 = require("nestjs-zod/z");
const TransactionQuerySchema = z_1.z.object({
    perPage: z_1.z
        .preprocess((input) => {
        const processed = z_1.z
            .string()
            .regex(/^\d+$/)
            .transform(Number)
            .safeParse(input);
        return processed.success ? processed.data : input;
    }, z_1.z
        .number({
        invalid_type_error: 'Parameter "perPage" must be a number!',
    })
        .min(0))
        .default(0),
    pageNo: z_1.z
        .preprocess((input) => {
        const processed = z_1.z
            .string()
            .regex(/^\d+$/)
            .transform(Number)
            .safeParse(input);
        return processed.success ? processed.data : input;
    }, z_1.z
        .number({
        invalid_type_error: 'Parameter "pageNo" must be a number!',
    })
        .min(1))
        .default(1),
});
class TransactionQueryDto extends (0, nestjs_zod_1.createZodDto)(TransactionQuerySchema) {
}
exports.TransactionQueryDto = TransactionQueryDto;
//# sourceMappingURL=transaction-query.dto.js.map