import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CinemaDocument = HydratedDocument<Cinema>;

@Schema()
export class Cinema {
  @Prop()
  name: string;

  @Prop()
  address: string;

}

export const CinemaSchema = SchemaFactory.createForClass(Cinema);