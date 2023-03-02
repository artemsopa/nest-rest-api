import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { patchNestJsSwagger } from 'nestjs-zod';
import { AppModule } from '@/app.module';
import { configsService } from '@/configs/configs.service';
import { GlobalExceptionFilter } from '@/common/filters/global-exception.filter';

const main = async () => {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new GlobalExceptionFilter());
  app.enableCors();

  patchNestJsSwagger();
  const options = new DocumentBuilder()
    .setTitle('NestJS REST API')
    .setDescription('Financial manager to monitor your finances')
    .setVersion('1.0')
    .addTag('banks')
    .addTag('categories')
    .addTag('transactions')
    .addTag('statistics')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, document);

  const PORT = configsService.getPort();
  await app.listen(PORT, async () =>
    console.log(`Application is running on: ${await app.getUrl()}`),
  );

  process.on('uncaughtException', function (err) {
    console.log(err);
  });
};

main();
