import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { University } from './university.schema';
import { Model } from 'mongoose';
import { CreateUniversityDto } from './dto/create-university.dto';

@Injectable()
export class UniversityService {
  constructor(
    @InjectModel(University.name) private universityModel: Model<University>,
  ) {}

  async create(createUniversityDto: CreateUniversityDto): Promise<University> {
    const createdUniversity = new this.universityModel(createUniversityDto);
    return createdUniversity.save();
  }

  async findAll(): Promise<University[]> {
    return this.universityModel.find().exec();
  }
}
