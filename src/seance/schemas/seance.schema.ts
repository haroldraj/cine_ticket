import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SeanceDocument = HydratedDocument<Seance>;

@Schema()
export class Seance {
  @Prop()
  date: Date;

  @Prop()
  price: number;

  @Prop()
  salle_id: string;

  @Prop()
  movie_id: string;

}

export const SeanceSchema = SchemaFactory.createForClass(Seance);
