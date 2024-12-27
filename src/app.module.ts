import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuizModule } from './quiz/quiz.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import  {Quiz}  from './quiz/quiz.entity'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'quizdbs',
      entities: [Quiz],
      synchronize: true,
    }),
    QuizModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
