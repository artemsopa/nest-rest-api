"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryStatisticDto = void 0;
const nestjs_zod_1 = require("nestjs-zod");
const z_1 = require("nestjs-zod/z");
const CategoryStatisticSchema = z_1.z.object({
    categoryName: z_1.z.number(),
});
class CategoryStatisticDto extends (0, nestjs_zod_1.createZodDto)(CategoryStatisticSchema) {
}
exports.CategoryStatisticDto = CategoryStatisticDto;
//# sourceMappingURL=category-statistic.dto.js.map