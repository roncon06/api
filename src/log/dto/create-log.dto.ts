import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateLogDto {
  @IsNotEmpty()
  @IsString()
  route: string;

  @IsNotEmpty()
  @IsString()
  method: string;

  @IsNotEmpty()
  @IsNumber()
  responseTime: number;
}
