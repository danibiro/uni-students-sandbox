import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Post,
} from '@nestjs/common';
import { University } from './university.schema';
import { UniversityService } from './university.service';
import { CreateUniversityDto } from './dto/create-university.dto';
import { Types } from 'mongoose';

@Controller('universities')
export class UniversityController {
  private readonly logger = new Logger(UniversityController.name);

  constructor(private readonly universityService: UniversityService) {}

  @Get()
  async findAll(): Promise<University[]> {
    this.logger.log('UniversityController.findAll');
    return this.universityService.findAll();
  }

  @Post()
  async create(
    @Body() createUniversityDto: CreateUniversityDto,
  ): Promise<University> {
    this.logger.log('UniversityController.create');
    return this.universityService.create(createUniversityDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: Types.ObjectId): Promise<University> {
    this.logger.log('UniversityController delete');
    return this.universityService.delete(id);
  }
}
