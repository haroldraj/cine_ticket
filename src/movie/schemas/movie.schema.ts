import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MovieDocument = HydratedDocument<Movie>;

@Schema()
export class Movie {
  @Prop()
  title: string;

  @Prop()
  minute: number;

  @Prop()
  limit_age: number;

  @Prop()
  category_id: string;

}

export const MovieSchema = SchemaFactory.createForClass(Movie);