import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TextDocument = HydratedDocument<Text>;

@Schema()
export class Text {
  @Prop()
  key: string;

  @Prop()
  text: string;
}

export const TextSchema = SchemaFactory.createForClass(Text);
