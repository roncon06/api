import { Module } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MoviesController } from './movies.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
    imports: [HttpModule. register({
    timeout: 5000,
    maxRedirects: 5,
  }),],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class MoviesModule {}
