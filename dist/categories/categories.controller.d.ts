import { CategoriesService } from '@/categories/categories.service';
import { CategoryUpdateDto } from '@/categories/dtos/category-update.dto';
import { CategoryCreateDto } from '@/categories/dtos/category-create.dto';
import { CategoryParamDto } from '@/categories/dtos/category-param.dto';
import { CategoryEntity } from '@/categories/entities/category.entity';
import { MessageResponseDto } from '@/common/dtos/message-response.dto';
export declare class CategoriesController {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
    getAll(): Promise<CategoryEntity[]>;
    getOne(id: string): Promise<CategoryEntity>;
    create(body: CategoryCreateDto): Promise<MessageResponseDto>;
    update({ id }: CategoryParamDto, body: CategoryUpdateDto): Promise<MessageResponseDto>;
    delete({ id }: CategoryParamDto): Promise<MessageResponseDto>;
}
