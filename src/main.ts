import load from './tracer';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const P = require('../package.json');
load(P);

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3001);
}
bootstrap();
