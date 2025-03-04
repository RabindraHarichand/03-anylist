import { ObjectType, Field, Int, ID, Float } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'items' })
@ObjectType()
export class Item {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @Column()
  @Field(() => String)
  name: string;

  @Field(() => Float)
  @Column()
  quantity: number;

  @Field(() => String)
  @Column()
  quantityUnits: string; // g, ml, kg, tsp

  //stores
  //user
}
