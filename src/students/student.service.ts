import { University } from './../universities/university.schema';
import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Student } from './student.schema';
import { Model, Types } from 'mongoose';
import { CreateStudentDto } from './dto/create-student.dto';

@Injectable()
export class StudentService {
  private readonly logger = new Logger(StudentService.name);

  constructor(
    @InjectModel(Student.name) private studentModel: Model<Student>,
    @InjectModel(University.name) private universityModel: Model<University>,
  ) {}

  async create(createStudentDto: CreateStudentDto): Promise<Student> {
    const university = await this.universityModel
      .findById(createStudentDto.university)
      .exec();
    if (!university) {
      this.logger.error(
        `No such University with ID ${createStudentDto.university}!`,
      );
      throw new NotFoundException(
        `No such University with ID ${createStudentDto.university}!`,
      );
    }
    const createdStudent = new this.studentModel(createStudentDto);
    this.logger.log('New student saved');
    return createdStudent.save();
  }

  async findAll(): Promise<Student[]> {
    return this.studentModel.find().exec();
  }

  async delete(id: Types.ObjectId): Promise<Student> {
    return this.studentModel.findByIdAndDelete({ _id: id }).exec();
  }
}
