import { IsString, IsNotEmpty, IsDateString, IsNumber, IsOptional } from 'class-validator';

export class CreateMovieDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  original_title?: string;

  @IsOptional()
  @IsString()
  overview?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  title?: string;

  @IsOptional()
  @IsDateString()
  release_date?: string;

  @IsOptional()
  @IsNumber()
  popularidade?: number;
}
