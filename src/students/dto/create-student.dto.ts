import { Types } from 'mongoose';

export class CreateStudentDto {
  readonly name: string;
  readonly age: number;
  readonly email: string;
  readonly address: string;
  readonly yearOfEnrollment: number;
  readonly gpa: number;
  readonly university: Types.ObjectId;
}
