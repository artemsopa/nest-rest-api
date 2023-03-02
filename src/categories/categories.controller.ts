import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CategoriesService } from '@/categories/categories.service';
import { CategoryUpdateDto } from '@/categories/dtos/category-update.dto';
import { CategoryCreateDto } from '@/categories/dtos/category-create.dto';
import { CategoryParamDto } from '@/categories/dtos/category-param.dto';
import { CategoryDto } from '@/categories/dtos/category.dto';
import { CategoryEntity } from '@/categories/entities/category.entity';
import { MessageResponseDto } from '@/common/dtos/message-response.dto';

@ApiTags('categories')
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @ApiOperation({ summary: 'Get all categories' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'An array of categories',
    type: CategoryDto,
    isArray: true,
  })
  @Get()
  public async getAll(): Promise<CategoryEntity[]> {
    return await this.categoriesService.getAll();
  }

  @ApiOperation({ summary: 'Get one category by id' })
  @ApiParam({ name: 'id', type: String })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Category item',
    type: CategoryDto,
  })
  @Get(':id')
  public async getOne(@Param('id') id: string): Promise<CategoryEntity> {
    return await this.categoriesService.getOneById(id);
  }

  @ApiOperation({ summary: 'Create new category' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Message with id',
    type: MessageResponseDto,
  })
  @Post()
  public async create(
    @Body() body: CategoryCreateDto,
  ): Promise<MessageResponseDto> {
    const id = await this.categoriesService.create(body);
    return { message: `Category was successfully created`, id };
  }

  @ApiOperation({ summary: 'Update category' })
  @ApiParam({ name: 'id', type: String })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Message with id',
    type: MessageResponseDto,
  })
  @Put(':id')
  public async update(
    @Param() { id }: CategoryParamDto,
    @Body() body: CategoryUpdateDto,
  ): Promise<MessageResponseDto> {
    await this.categoriesService.update(id, body);
    return { message: `Category was successfully updated`, id };
  }

  @ApiOperation({ summary: 'Delete category by id' })
  @ApiParam({ name: 'id', type: String })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Message with id',
    type: MessageResponseDto,
  })
  @Delete(':id')
  public async delete(
    @Param() { id }: CategoryParamDto,
  ): Promise<MessageResponseDto> {
    await this.categoriesService.delete(id);
    return { message: `Category was successfully deleted`, id };
  }
}
