import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class Dictionary {
  @PrimaryGeneratedColumn('uuid')
  word_id: string;

  @Column({name: 'word_name'})
  wordName: string;

  @Column({name: 'word_description'})
  wordDescription: string;

  @CreateDateColumn()
  created_at: Date;
}