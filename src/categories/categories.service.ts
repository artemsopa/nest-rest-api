import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryCreateDto } from '@/categories/dtos/category-create.dto';
import { CategoryUpdateDto } from '@/categories/dtos/category-update.dto';
import { CategoryEntity } from '@/categories/entities/category.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly categoriesRepository: Repository<CategoryEntity>,
  ) {}

  public getAll = async (): Promise<CategoryEntity[]> => {
    return await this.categoriesRepository.find();
  };

  public getOneById = async (id: string): Promise<CategoryEntity> => {
    const category = await this.categoriesRepository.findOneBy({ id });
    if (!category) {
      throw new HttpException(`Cannot find category with id "${id}"`, 422);
    }
    return category;
  };

  public create = async (categoryInput: CategoryCreateDto): Promise<string> => {
    const category = await this.categoriesRepository.findOneBy({
      name: categoryInput.name,
    });
    if (category) {
      throw new HttpException(
        `Category with name "${categoryInput.name}" already exists`,
        400,
      );
    }
    const {
      raw: [{ id }],
    } = await this.categoriesRepository.insert(categoryInput);
    return id;
  };

  public update = async (
    id: string,
    categoryInput: CategoryUpdateDto,
  ): Promise<void> => {
    const { affected } = await this.categoriesRepository.update(
      { id },
      categoryInput,
    );
    if (affected === 0) {
      throw new HttpException(`Cannot find category by id ${id}`, 400);
    }
  };

  public delete = async (id: string): Promise<void> => {
    const { affected } = await this.categoriesRepository.delete(id);
    if (affected === 0) {
      throw new HttpException(`Cannot find category by id ${id}`, 400);
    }
  };
}
