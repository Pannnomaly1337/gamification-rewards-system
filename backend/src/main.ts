import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Explicit local dev origins + an optional exact production URL via env
  const staticOrigins = ['http://localhost:3000', 'http://localhost:3001'];
  const frontendUrl = process.env.FRONTEND_URL;
  if (frontendUrl) {
    staticOrigins.push(frontendUrl);
  }

  app.enableCors({
    origin: (
      origin: string | undefined,
      callback: (err: Error | null, allow?: boolean) => void,
    ): void => {
      // allow non-browser tools (curl/Postman) that send no Origin header
      if (!origin) {
        callback(null, true);
        return;
      }
      // allow localhost + configured URL, and any Vercel domain (prod + previews)
      if (staticOrigins.includes(origin) || origin.endsWith('.vercel.app')) {
        callback(null, true);
        return;
      }
      callback(new Error(`Not allowed by CORS: ${origin}`));
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  });

  await app.listen(process.env.PORT || 3000);
}

void bootstrap();
