import { Repository } from 'typeorm';
import { CategoryCreateDto } from '@/categories/dtos/category-create.dto';
import { CategoryUpdateDto } from '@/categories/dtos/category-update.dto';
import { CategoryEntity } from '@/categories/entities/category.entity';
export declare class CategoriesService {
    private readonly categoriesRepository;
    constructor(categoriesRepository: Repository<CategoryEntity>);
    getAll: () => Promise<CategoryEntity[]>;
    getOneById: (id: string) => Promise<CategoryEntity>;
    create: (categoryInput: CategoryCreateDto) => Promise<string>;
    update: (id: string, categoryInput: CategoryUpdateDto) => Promise<void>;
    delete: (id: string) => Promise<void>;
}
