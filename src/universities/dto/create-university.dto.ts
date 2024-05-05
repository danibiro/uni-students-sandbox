import {
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  Length,
} from 'class-validator';
import { IsNotFutureYear } from 'src/util/validators/IsNotFutureYear';

export class CreateUniversityDto {
  @IsNotEmpty()
  @IsString()
  @Length(1, 40)
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  @Length(1, 40)
  readonly location: string;

  @IsNumber()
  @IsNotFutureYear()
  @IsPositive()
  readonly establishmentYear: number;
}
