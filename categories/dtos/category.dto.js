"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryDto = void 0;
const nestjs_zod_1 = require("nestjs-zod");
const z_1 = require("nestjs-zod/z");
const CategorySchema = z_1.z.object({
    id: z_1.z.string(),
    name: z_1.z.string(),
});
class CategoryDto extends (0, nestjs_zod_1.createZodDto)(CategorySchema) {
}
exports.CategoryDto = CategoryDto;
//# sourceMappingURL=category.dto.js.map