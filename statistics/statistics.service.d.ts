import { StatisticsRepository } from '@/statistics/statistics.repository';
import { GetStatisticInputDto } from '@/statistics/dtos/get-statistic-input.dto';
import { CategoryStatistic } from '@/statistics/dtos/category-statistic.dto';
export declare class StatisticsService {
    private readonly statisticsRpository;
    constructor(statisticsRpository: StatisticsRepository);
    getCategoriesStatisticByIdsAndPeriod: ({ categoryIds, fromPeriod, toPeriod, }: GetStatisticInputDto) => Promise<CategoryStatistic[]>;
}
