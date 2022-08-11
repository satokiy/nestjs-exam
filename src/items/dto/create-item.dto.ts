import { IsString, IsNotEmpty, MaxLength, IsInt, Min } from 'class-validator';

export class CreateItemDto {

  @IsString()
  @IsNotEmpty()
  @MaxLength(40)
  name: string;

  @IsInt()
  @Min(1)
  price: number;

  @IsString()
  @IsNotEmpty()
  description: string;
}
