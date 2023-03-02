import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { StatisticsService } from '@/statistics/statistics.service';
import { GetStatisticInputDto } from '@/statistics/dtos/get-statistic-input.dto';
import {
  CategoryStatistic,
  CategoryStatisticDto,
} from '@/statistics/dtos/category-statistic.dto';

@ApiTags('statistics')
@Controller('statistics')
export class StatisticsController {
  constructor(private readonly statisticsService: StatisticsService) {}

  @ApiOperation({
    summary: 'Get all categories` statistic. *Date format: YYYY-MM-DD',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'An array of categories` statistic',
    type: CategoryStatisticDto,
    isArray: true,
  })
  @Post()
  @HttpCode(HttpStatus.OK)
  public async getCategoriesStatisticByIdsAndPeriod(
    @Body() body: GetStatisticInputDto,
  ): Promise<CategoryStatistic[]> {
    const data =
      await this.statisticsService.getCategoriesStatisticByIdsAndPeriod(body);

    return data;
  }
}
