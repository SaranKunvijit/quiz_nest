import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('quizs')
export class Quiz {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  quizText: string;

  @Column("text", { array: true })
  options: string[];

  @Column()
  correctAnswer: string;
}
