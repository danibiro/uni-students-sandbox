import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UniversityModule } from './universities/university.module';
import { StudentModule } from './students/student.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/sandbox-nestjs-uni-student'),
    UniversityModule,
    StudentModule,
  ],
})
export class AppModule {}
