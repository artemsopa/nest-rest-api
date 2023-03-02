import { TransactionsService } from '@/transactions/transactions.service';
import { TransactionCreateDto } from '@/transactions/dtos/transaction-create.dto';
import { TransactionParamDto } from '@/transactions/dtos/transaction-param.dto';
import { TransactionQueryDto } from '@/transactions/dtos/transaction-query.dto';
import { TransactionEntity } from '@/transactions/entities/transaction.entity';
import { MessageResponseDto } from '@/common/dtos/message-response.dto';
import { Pagination } from '@/common/dtos/pagination.dto';
export declare class TransactionsController {
    private readonly transactionsService;
    constructor(transactionsService: TransactionsService);
    getAll({ perPage, pageNo }: TransactionQueryDto): Promise<Pagination<TransactionEntity[]>>;
    create(body: TransactionCreateDto): Promise<MessageResponseDto>;
    delete({ id }: TransactionParamDto): Promise<MessageResponseDto>;
}
