import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  fullname: string;

  @Prop()
  address: string;

  @Prop()
  mail: string;

  @Prop()
  age: number;

}

export const UserSchema = SchemaFactory.createForClass(User);