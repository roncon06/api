import { IsString, IsNotEmpty, IsDateString, IsNumber, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateMovieDto {
  @ApiPropertyOptional({
    description: 'The original title of the movie',
    example: 'Inception',
  })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  original_title?: string;

  @ApiPropertyOptional({
    description: 'The overview of the movie',
    example: 'A mind-bending thriller about dream infiltration.',
  })
  @IsOptional()
  @IsString()
  overview?: string;

  @ApiPropertyOptional({
    description: 'The title of the movie',
    example: 'Inception',
  })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  title?: string;

  @ApiPropertyOptional({
    description: 'The release date of the movie',
    example: '2010-07-16',
  })
  @IsOptional()
  @IsDateString()
  release_date?: string;

  @ApiPropertyOptional({
    description: 'The popularity of the movie',
    example: 8.8,
  })
  @IsOptional()
  @IsNumber()
  popularidade?: number;
}
