import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

export const WebhookSuccessSchema = z.object({
  message: z.string(),
});

export class WebhookSuccessDto extends createZodDto(WebhookSuccessSchema) {}
