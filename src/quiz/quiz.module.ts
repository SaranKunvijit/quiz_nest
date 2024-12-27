// quiz/quiz.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizService } from './quiz.service';
import { QuizController } from './quiz.controller';
import { Quiz } from './quiz.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Quiz])], // นำเข้า Entity ของ Quiz
  providers: [QuizService], // ลงทะเบียน Service
  controllers: [QuizController], // ลงทะเบียน Controller
})
export class QuizModule {}
