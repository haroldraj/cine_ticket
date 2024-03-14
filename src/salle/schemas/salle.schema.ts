import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SalleDocument = HydratedDocument<Salle>;

@Schema()
export class Salle {
  @Prop()
  name: string;

  @Prop()
  seat_max: number;

  @Prop()
  cinema_id: string;

}

export const SalleSchema = SchemaFactory.createForClass(Salle);