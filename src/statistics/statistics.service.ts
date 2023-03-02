import { Injectable } from '@nestjs/common';
import { StatisticsRepository } from '@/statistics/statistics.repository';
import { GetStatisticInputDto } from '@/statistics/dtos/get-statistic-input.dto';
import { CategoryStatistic } from '@/statistics/dtos/category-statistic.dto';

@Injectable()
export class StatisticsService {
  constructor(private readonly statisticsRpository: StatisticsRepository) {}

  public getCategoriesStatisticByIdsAndPeriod = async ({
    categoryIds,
    fromPeriod,
    toPeriod,
  }: GetStatisticInputDto): Promise<CategoryStatistic[]> => {
    const data =
      await this.statisticsRpository.getTransactionToCategoriesByCategoryIdsAndPeriod(
        categoryIds,
        fromPeriod,
        toPeriod,
      );

    const map = new Map<string, { [categoryName: string]: number }>();
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
