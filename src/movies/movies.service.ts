import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { HttpService } from '@nestjs/axios';
import axios, { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

@Injectable()
export class MoviesService {
  
  constructor(private readonly httpService: HttpService) {}

  async getPopularMovies(): Promise<any> {
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZTdmZTIyMDA5YzAyMWZjY2YyODBmNmRhMDhiZjdhOCIsInN1YiI6IjY2NWJhYzc0ZGMyM2Q5NWI5NDcxODhiNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ceUpHJDXmq-hy_Eg5uQLVOEfMqkLVQV9wBmcxicribM'
      }
    };

    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      // Handle errors here
      console.error('Error:', error);
      throw error;
    }
  }

  
  create(createMovieDto: CreateMovieDto) {
    return 'This action adds a new movie';
  }

  /*findAll() {
    return `This action returns all movies`;
  }*/

  findOne(id: number) {
    return `This action returns a #${id} movie`;
  }

  update(id: number, updateMovieDto: UpdateMovieDto) {
    return `This action updates a #${id} movie`;
  }

  remove(id: number) {
    return `This action removes a #${id} movie`;
  }



}
