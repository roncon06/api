import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('movies')
@UseGuards(AuthGuard) // Aplica o Auth Guard a todas as rotas deste controlador
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get('popular')
  async getPopularMovies() {
    return this.moviesService.getPopularMovies();
  }

  @Get('search')
  searchMovieByName(@Query('name') name: string): Observable<AxiosResponse<any>> {
    return this.moviesService.searchMovieByName(name);
  }


  @Post()
  create(@Body() createMovieDto: CreateMovieDto) {
    return this.moviesService.create(createMovieDto);
  }

  @Get()
  findAll() {
    return this.moviesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.moviesService.findById(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateMovieDto: UpdateMovieDto) {
    return this.moviesService.update(id, updateMovieDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.moviesService.remove(id);
  }
}
