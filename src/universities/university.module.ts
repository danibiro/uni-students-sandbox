import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { University, UniversitySchema } from './university.schema';
import { UniversityService } from './university.service';
import { UniversityController } from './university.controller';
import { StudentModule } from 'src/students/student.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: University.name, schema: UniversitySchema },
    ]),
    StudentModule,
  ],
  controllers: [UniversityController],
  providers: [UniversityService],
})
export class UniversityModule {}
