import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

const GetStatisticInputSchema: z.ZodSchema = z.object({
  categoryIds: z.array(
    z.string({
      invalid_type_error: 'Item of array "categoryIds" must be a string!',
    }),
    {
      required_error: 'Property "categoryIds" is required',
      invalid_type_error: 'Property "categoryIds" must be an array!',
    },
  ),
  fromPeriod: z
    .dateString({
      required_error: 'Property "fromPeriod" is required',
      invalid_type_error: 'Property "fromPeriod" must be a date!',
    })
    .format('date'),
  toPeriod: z
    .dateString({
      required_error: 'Property "toPeriod" is required',
      invalid_type_error: 'Property "toPeriod" must be a date!',
    })
    .format('date'),
});

export class GetStatisticInputDto extends createZodDto(
  GetStatisticInputSchema,
) {}
