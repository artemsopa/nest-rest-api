"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhookSuccessDto = exports.WebhookSuccessSchema = void 0;
const nestjs_zod_1 = require("nestjs-zod");
const z_1 = require("nestjs-zod/z");
exports.WebhookSuccessSchema = z_1.z.object({
    message: z_1.z.string(),
});
class WebhookSuccessDto extends (0, nestjs_zod_1.createZodDto)(exports.WebhookSuccessSchema) {
}
exports.WebhookSuccessDto = WebhookSuccessDto;
//# sourceMappingURL=webhook-success.dto.js.map