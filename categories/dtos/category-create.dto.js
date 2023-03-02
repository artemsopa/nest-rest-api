"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryCreateDto = void 0;
const nestjs_zod_1 = require("nestjs-zod");
const z_1 = require("nestjs-zod/z");
const CategoryCreateSchema = z_1.z.object({
    name: z_1.z.string({
        required_error: 'Property "name" is required',
        invalid_type_error: 'Property "name" must be a string!',
    }),
});
class CategoryCreateDto extends (0, nestjs_zod_1.createZodDto)(CategoryCreateSchema) {
}
exports.CategoryCreateDto = CategoryCreateDto;
//# sourceMappingURL=category-create.dto.js.map