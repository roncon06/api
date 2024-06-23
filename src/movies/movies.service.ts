import { Delete, Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { HttpService } from '@nestjs/axios';
import axios, { AxiosResponse } from 'axios';
import { Observable, map } from 'rxjs';
import { Movie } from './schema/movie.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class MoviesService {

  constructor(
    private readonly httpService: HttpService,
    @InjectModel(Movie.name) private readonly movieModel: Model<Movie>,
  ){}

  async getPopularMovies(): Promise<any> {
  const baseUrl = process.env.BASEURL;
  const language = process.env.LANGUAGE;
  const apiKey = process.env.APIKEY;

  const resultsPerPage = 20; 
  const totalPages = 5; 
  const movies = [];

  try {
    
    for (let page = 1; page <= totalPages; page++) {
      const options = {
        method: 'GET',
        url: `${baseUrl}?language=${language}&page=${page}`,
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${apiKey}`
        }
      };

      const response = await axios.request(options);
      movies.push(...response.data.results); // Adiciona os resultados da página atual ao array de filmes
    }

    return movies;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }

}

searchMovieByName(movieName: string): Observable<AxiosResponse<any>> {

  const baseUrl = process.env.BASEURL;
  const language = process.env.LANGUAGE;
  const apiKey = process.env.APIKEY;
  
  const options = {
    params: {
      query: movieName,
      include_adult: false,
      language: language,
      page: 1
    },
    headers: {
      Authorization: `Bearer ${apiKey}`
    }
  };

  return this.httpService.get(baseUrl, options)
    .pipe(
      map(response => response.data) // Mapeia apenas os dados da resposta
    );
}



  create(createMovieDto: CreateMovieDto) {
    const createdMovie = this.movieModel.create(createMovieDto);
    return createdMovie;
  }

  findAll() {
      return this.movieModel.find();
    }


    async findById(id: string): Promise<Movie> {
      return this.movieModel.findById(id)
    }

    async update(id: string, updateMovieDto: UpdateMovieDto): Promise<Movie> {
      return this.movieModel.findByIdAndUpdate(
        id,
        {
          original_title: updateMovieDto.original_title,
          overview: updateMovieDto.overview,
          title: updateMovieDto.title,
          release_date: updateMovieDto.release_date,
          popularidade: updateMovieDto.popularidade,
        },
        { new: true } // Retorna o documento atualizado
      )
    }
  

    remove(id: string) {
      return this.movieModel.findByIdAndDelete(id);
    }


}
