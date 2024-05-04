import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UniversityDocument = HydratedDocument<University>;

@Schema({ collection: 'universities' })
export class University {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  location: string;

  @Prop({ required: true })
  establishmentYear: number;
}

export const UniversitySchema = SchemaFactory.createForClass(University);
