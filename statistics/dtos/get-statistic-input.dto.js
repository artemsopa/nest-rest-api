"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetStatisticInputDto = void 0;
const nestjs_zod_1 = require("nestjs-zod");
const z_1 = require("nestjs-zod/z");
const GetStatisticInputSchema = z_1.z.object({
    categoryIds: z_1.z.array(z_1.z.string({
        invalid_type_error: 'Item of array "categoryIds" must be a string!',
    }), {
        required_error: 'Property "categoryIds" is required',
        invalid_type_error: 'Property "categoryIds" must be an array!',
    }),
    fromPeriod: z_1.z
        .dateString({
        required_error: 'Property "fromPeriod" is required',
        invalid_type_error: 'Property "fromPeriod" must be a date!',
    })
        .format('date'),
    toPeriod: z_1.z
        .dateString({
        required_error: 'Property "toPeriod" is required',
        invalid_type_error: 'Property "toPeriod" must be a date!',
    })
        .format('date'),
});
class GetStatisticInputDto extends (0, nestjs_zod_1.createZodDto)(GetStatisticInputSchema) {
}
exports.GetStatisticInputDto = GetStatisticInputDto;
//# sourceMappingURL=get-statistic-input.dto.js.map