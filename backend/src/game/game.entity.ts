import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Game {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  platform: string;

  @Column('float')
  price: number;

  @Column()
  currency: string;

  @Column()
  discount: number;

  @Column('float')
  cashback: number;

  @Column()
  imageUrl: string;

  @Column()
  store: string;

  @Column()
  region: string;
}
