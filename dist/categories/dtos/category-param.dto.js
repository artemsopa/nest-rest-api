"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryParamDto = void 0;
const nestjs_zod_1 = require("nestjs-zod");
const z_1 = require("nestjs-zod/z");
const CategoryParamSchema = z_1.z.object({
    id: z_1.z.string({
        required_error: 'Path parameter "id" is required',
        invalid_type_error: 'Parameter "id" must be a string!',
    }),
});
class CategoryParamDto extends (0, nestjs_zod_1.createZodDto)(CategoryParamSchema) {
}
exports.CategoryParamDto = CategoryParamDto;
//# sourceMappingURL=category-param.dto.js.map