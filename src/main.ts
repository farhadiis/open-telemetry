import trace from './tracer';
trace(require('../package.json')); // ===> MUST RUN BEFORE ANY THINGS.

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3001);
}
bootstrap();
