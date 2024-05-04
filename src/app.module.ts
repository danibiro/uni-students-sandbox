import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UniversityModule } from './universities/university.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/sandbox-nestjs-uni-student'),
    UniversityModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
