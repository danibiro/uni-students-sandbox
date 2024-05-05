import { University } from '../universities/university.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type StudentDocument = HydratedDocument<Student>;

@Schema()
export class Student {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  age: number;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  address: string;

  @Prop({ required: true })
  yearOfEnrollment: number;

  @Prop({ required: true })
  gpa: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'University' })
  university: University;
}

export const StudentSchema = SchemaFactory.createForClass(Student);
