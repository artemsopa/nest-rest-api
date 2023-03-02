import { StatisticsService } from '@/statistics/statistics.service';
import { GetStatisticInputDto } from '@/statistics/dtos/get-statistic-input.dto';
import { CategoryStatistic } from '@/statistics/dtos/category-statistic.dto';
export declare class StatisticsController {
    private readonly statisticsService;
    constructor(statisticsService: StatisticsService);
    getCategoriesStatisticByIdsAndPeriod(body: GetStatisticInputDto): Promise<CategoryStatistic[]>;
}
