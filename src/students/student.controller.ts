import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Post,
} from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { Student } from './student.schema';
import { Types } from 'mongoose';

@Controller('students')
export class StudentController {
  private readonly logger = new Logger(StudentController.name);
  constructor(private readonly studentService: StudentService) {}

  @Get()
  async findAll(): Promise<Student[]> {
    this.logger.log('StudentController.findAll');
    return this.studentService.findAll();
  }

  @Post()
  async create(@Body() createStudentDto: CreateStudentDto): Promise<Student> {
    this.logger.log('StudentController.create');
    return this.studentService.create(createStudentDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: Types.ObjectId): Promise<Student> {
    this.logger.log('StudentController.delete');
    return this.studentService.delete(id);
  }
}
