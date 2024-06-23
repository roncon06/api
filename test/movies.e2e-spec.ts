import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { getModelToken } from '@nestjs/mongoose';
import { Movie } from '../src/movies/schema/movie.schema';
import { Model } from 'mongoose';
import { MockAuthGuard } from './mock-auth.guard';
import { AuthGuard } from '../src/auth/auth.guard';

describe('MoviesController (e2e) - POST /movies', () => {
  let app: INestApplication;
  let model: Model<Movie>;

  const mockMovie = {
    _id: '1',
    original_title: 'Inception',
    overview: 'A mind-bending thriller',
    title: 'Inception',
    release_date: '2010-07-16',
    popularity: 8.8,
  };

  const updatedMockMovie = {
    _id: '1',
    original_title: 'Inception Updated',
    overview: 'An updated mind-bending thriller',
    title: 'Inception Updated',
    release_date: '2010-07-16',
    popularity: 9.0,
  };

  const exec = jest.fn().mockResolvedValue(mockMovie);
  const mockMovieModel = {
    create: jest.fn().mockResolvedValue(mockMovie),
    findById: jest.fn().mockResolvedValue(mockMovie),
    findByIdAndDelete: jest.fn().mockResolvedValue(mockMovie),
    findByIdAndUpdate: jest.fn().mockResolvedValue(updatedMockMovie),

  };

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(getModelToken(Movie.name))
      .useValue(mockMovieModel)
      .overrideGuard(AuthGuard)
      .useValue(new MockAuthGuard())
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  
  it('/movies (POST)', () => {
    return request(app.getHttpServer())
      .post('/movies')
      .set('Authorization', 'Bearer mock-jwt-token') // Adicione o header de autorização
      .send({
        original_title: 'Inception',
        overview: 'A mind-bending thriller',
        title: 'Inception',
        release_date: '2010-07-16',
        popularity: 8.8,
      })
      .expect(201)
      .expect(mockMovie);
  });

  it('/movies/:id (GET)', () => {
    return request(app.getHttpServer())
      .get('/movies/1')
      .expect(200)
      .expect(mockMovie);
  });

  it('/movies/:id (DELETE)', () => {
    return request(app.getHttpServer())
      .delete('/movies/1')
      .expect(200)
      .expect(mockMovie);
  });

  it('/movies/:id (PATCH)', () => {
    return request(app.getHttpServer())
      .patch('/movies/1')
      .send({
        original_title: 'Inception Updated',
        overview: 'An updated mind-bending thriller',
        title: 'Inception Updated',
        release_date: '2010-07-16',
        popularity: 9.0,
      })
      .expect(200)
      .expect(updatedMockMovie);
  });
});
