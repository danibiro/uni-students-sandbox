import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { University } from './university.schema';
import { Model, Types } from 'mongoose';
import { CreateUniversityDto } from './dto/create-university.dto';
import { Student } from 'src/students/student.schema';

@Injectable()
export class UniversityService {
  private readonly logger = new Logger(UniversityService.name);

  constructor(
    @InjectModel(University.name) private universityModel: Model<University>,
    @InjectModel(Student.name) private studentModel: Model<Student>,
  ) {}

  async create(createUniversityDto: CreateUniversityDto): Promise<University> {
    const createdUniversity = new this.universityModel(createUniversityDto);
    return createdUniversity.save();
  }

  async findAll(): Promise<University[]> {
    return this.universityModel.find().exec();
  }

  async delete(id: Types.ObjectId): Promise<University> {
    const result = await this.studentModel.updateMany(
      {
        university: id,
      },
      {
        university: null,
      },
    );
    this.logger.log(
      `Found ${result.matchedCount} students with uni ${id}, changed them to null.`,
    );
    const deletedUniversity = await this.universityModel
      .findByIdAndDelete({
        _id: id,
      })
      .exec();
    this.logger.log(`Removed university with ID ${id}.`);
    return deletedUniversity;
  }
}
