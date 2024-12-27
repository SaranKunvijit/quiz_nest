import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Quiz } from './quiz.entity';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(Quiz)
    private quizRepository: Repository<Quiz>,
  ) {}

  create(quiz: Partial<Quiz>) {
    return this.quizRepository.save(quiz);
  }

  findAll() {
    return this.quizRepository.find();
  }

  findOne(id: number) {
    return this.quizRepository.findOneBy({ id });
  }

  update(id: number, quiz: Partial<Quiz>) {
    return this.quizRepository.update(id, quiz);
  }

  remove(id: number) {
    return this.quizRepository.delete(id);
  }
}
