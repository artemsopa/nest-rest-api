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
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatisticsService = void 0;
const common_1 = require("@nestjs/common");
const statistics_repository_1 = require("./statistics.repository");
let StatisticsService = class StatisticsService {
    constructor(statisticsRpository) {
        this.statisticsRpository = statisticsRpository;
        this.getCategoriesStatisticByIdsAndPeriod = async ({ categoryIds, fromPeriod, toPeriod, }) => {
            const data = await this.statisticsRpository.getTransactionToCategoriesByCategoryIdsAndPeriod(categoryIds, fromPeriod, toPeriod);
            const map = new Map();
            for (const item of data) {
                const itemByKey = map.get(item.categoryId);
                map.set(item.categoryId, {
                    [item.category.name]: itemByKey
                        ? itemByKey[item.category.name] + item.transaction.amount
                        : item.transaction.amount,
                });
            }
            const result = Array.from(map, ([key, value]) => value);
            return result;
        };
    }
};
StatisticsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [statistics_repository_1.StatisticsRepository])
], StatisticsService);
exports.StatisticsService = StatisticsService;
//# sourceMappingURL=statistics.service.js.map