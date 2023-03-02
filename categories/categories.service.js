"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const category_entity_1 = require("./entities/category.entity");
let CategoriesService = class CategoriesService {
    constructor(categoriesRepository) {
        this.categoriesRepository = categoriesRepository;
        this.getAll = async () => {
            return await this.categoriesRepository.find();
        };
        this.getOneById = async (id) => {
            const category = await this.categoriesRepository.findOneBy({ id });
            if (!category) {
                throw new common_1.HttpException(`Cannot find category with id "${id}"`, 422);
            }
            return category;
        };
        this.create = async (categoryInput) => {
            const category = await this.categoriesRepository.findOneBy({
                name: categoryInput.name,
            });
            if (category) {
                throw new common_1.HttpException(`Category with name "${categoryInput.name}" already exists`, 400);
            }
            const { raw: [{ id }], } = await this.categoriesRepository.insert(categoryInput);
            return id;
        };
        this.update = async (id, categoryInput) => {
            const { affected } = await this.categoriesRepository.update({ id }, categoryInput);
            if (affected === 0) {
                throw new common_1.HttpException(`Cannot find category by id ${id}`, 400);
            }
        };
        this.delete = async (id) => {
            const { affected } = await this.categoriesRepository.delete(id);
            if (affected === 0) {
                throw new common_1.HttpException(`Cannot find category by id ${id}`, 400);
            }
        };
    }
};
CategoriesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(category_entity_1.CategoryEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CategoriesService);
exports.CategoriesService = CategoriesService;
//# sourceMappingURL=categories.service.js.map