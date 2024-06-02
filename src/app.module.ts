import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesService } from './movies/movies.service';
import { MoviesModule } from './movies/movies.module';
import { HttpModule, HttpService } from '@nestjs/axios';


@Module({
  imports: [MoviesModule, HttpModule],
  controllers: [AppController],
  providers: [AppService, MoviesService],
})
export class AppModule {}
