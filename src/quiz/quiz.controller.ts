import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { Quiz } from './quiz.entity';

@Controller('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Post()
  create(@Body() quiz: Partial<Quiz>) {
    return this.quizService.create(quiz);
  }

  @Get()
  findAll() {
    return this.quizService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.quizService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() quiz: Partial<Quiz>) {
    return this.quizService.update(id, quiz);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.quizService.remove(id);
  }
}
