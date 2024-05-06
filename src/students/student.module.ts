import { Module, forwardRef } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Student, StudentSchema } from './student.schema';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';
import { UniversityModule } from 'src/universities/university.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Student.name, schema: StudentSchema }]),
    forwardRef(() => UniversityModule),
  ],
  controllers: [StudentController],
  providers: [StudentService],
  exports: [StudentService, MongooseModule],
})
export class StudentModule {}
