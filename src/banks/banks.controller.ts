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
import { ApiResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { BanksService } from '@/banks/banks.service';
import { BankCreateDto } from '@/banks/dtos/bank-create.dto';
import { BankUpdateDto } from '@/banks/dtos/bank-update.dto';
import { BankParamDto } from '@/banks/dtos/bank-param.dto';
import { BankDto } from '@/banks/dtos/bank.dto';
import { BankEntity } from '@/banks/entities/bank.entity';
import {
  MessageResponse,
  MessageResponseDto,
} from '@/common/dtos/message-response.dto';

@ApiTags('banks')
@Controller('banks')
export class BanksController {
  constructor(private readonly banksService: BanksService) {}

  @ApiOperation({ summary: 'Get all banks' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'An array of banks',
    type: BankDto,
    isArray: true,
  })
  @Get()
  public async getAll(): Promise<BankEntity[]> {
    return await this.banksService.getAll();
  }

  @ApiOperation({ summary: 'Get one bank by id' })
  @ApiParam({ name: 'id', type: String })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Bank item',
    type: BankDto,
  })
  @Get(':id')
  public async getOne(@Param('id') id: string): Promise<BankEntity> {
    return await this.banksService.getOneById(id);
  }

  @ApiOperation({ summary: 'Create new bank' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Message with id',
    type: MessageResponseDto,
  })
  @Post()
  public async create(@Body() body: BankCreateDto): Promise<MessageResponse> {
    const id = await this.banksService.create(body);
    return { message: `Bank was successfully created`, id };
  }

  @ApiOperation({ summary: 'Update bank' })
  @ApiParam({ name: 'id', type: String })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Message with id',
    type: MessageResponseDto,
  })
  @Put(':id')
  public async update(
    @Param() { id }: BankParamDto,
    @Body() body: BankUpdateDto,
  ): Promise<MessageResponse> {
    await this.banksService.update(id, body);
    return { message: `Bank was successfully updated`, id };
  }

  @ApiOperation({ summary: 'Delete bank by id' })
  @ApiParam({ name: 'id', type: String })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Message with id',
    type: MessageResponseDto,
  })
  @Delete(':id')
  public async delete(@Param() { id }: BankParamDto): Promise<MessageResponse> {
    await this.banksService.delete(id);
    return { message: `Bank was successfully deleted`, id };
  }
}
