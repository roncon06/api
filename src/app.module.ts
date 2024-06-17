import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesService } from './movies/movies.service';
import { MoviesModule } from './movies/movies.module';
import { HttpModule, HttpService } from '@nestjs/axios';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://0.0.0.0/movies-nest'),
    MoviesModule, HttpModule, AuthModule, UsersModule],
  controllers: [AppController],
  providers: [AppService, MoviesService],
})
export class AppModule {}
