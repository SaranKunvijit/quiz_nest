// main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // เปิดใช้งาน CORS
  app.enableCors({
    origin: 'http://localhost:3005', // กำหนดโดเมนต้นทาง
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // กำหนด Method ที่อนุญาต
    credentials: true, // อนุญาตให้ส่ง Cookies หรือ Headers แบบพิเศษ
  });

  await app.listen(3000); // กำหนดให้เซิร์ฟเวอร์รันที่พอร์ต 3000
}
bootstrap();
