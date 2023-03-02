import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import {
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { TransactionsService } from '@/transactions/transactions.service';
import { TransactionListSchemaDto } from '@/transactions/dtos/transaction-list.dto';
import { TransactionCreateDto } from '@/transactions/dtos/transaction-create.dto';
import { TransactionParamDto } from '@/transactions/dtos/transaction-param.dto';
import { TransactionQueryDto } from '@/transactions/dtos/transaction-query.dto';
import { TransactionEntity } from '@/transactions/entities/transaction.entity';
import { MessageResponseDto } from '@/common/dtos/message-response.dto';
import { Pagination } from '@/common/dtos/pagination.dto';

@ApiTags('transactions')
@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @ApiOperation({ summary: 'Get all transactions with optional pagination' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'An array of transactions with total count',
    type: TransactionListSchemaDto,
    isArray: true,
  })
  @ApiQuery({ name: 'perPage', type: Number, required: false })
  @ApiQuery({ name: 'pageNo', type: Number, required: false })
  @Get()
  public async getAll(
    @Query() { perPage, pageNo }: TransactionQueryDto,
  ): Promise<Pagination<TransactionEntity[]>> {
    return await this.transactionsService.getAllWithPagination(perPage, pageNo);
  }

  @ApiOperation({ summary: 'Create new transaction' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Transaction with id',
    type: MessageResponseDto,
  })
  @Post()
  public async create(
    @Body()
    body: TransactionCreateDto,
  ): Promise<MessageResponseDto> {
    const id = await this.transactionsService.create(body);
    return { message: `Transaction was successfully created`, id };
  }

  @ApiOperation({ summary: 'Delete transaction' })
  @ApiParam({ name: 'id', type: String })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Message with id',
    type: MessageResponseDto,
  })
  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  public async delete(
    @Param() { id }: TransactionParamDto,
  ): Promise<MessageResponseDto> {
    await this.transactionsService.delete(id);
    return { message: `Transaction was successfully deleted`, id };
  }
}
