import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesService } from './movies/movies.service';
import { MoviesModule } from './movies/movies.module';
import { HttpModule, HttpService } from '@nestjs/axios';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { config } from 'dotenv';
import { ThrottlerModule } from '@nestjs/throttler';
import { LogService } from './log/log.service';
import { LogController } from './log/log.controller';
import { LogModule } from './log/log.module';
config();


@Module({
  imports: [ConfigModule.forRoot( {isGlobal: true} ),
    MongooseModule.forRoot(process.env.MONGODB_URL),  
    MoviesModule, HttpModule, AuthModule, UsersModule, LogModule,
    ],
  controllers: [],
  providers: [],
})
export class AppModule {}
