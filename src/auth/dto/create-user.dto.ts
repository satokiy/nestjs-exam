import {
  IsEnum,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { UserStatus } from '../user-status.enum';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  username;

  @IsString()
  @MinLength(8)
  @MaxLength(32)
  password;

  @IsEnum(UserStatus)
  status: UserStatus;
}
