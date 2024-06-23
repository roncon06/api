import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MovieDocument = HydratedDocument<Movie>;

@Schema()
export class Movie {
  @Prop()
  original_title: string;

  @Prop()
  overview: string;

  @Prop()
  title: string;

  @Prop()
  release_date: string;

  @Prop()
  popularidade: number;
}

export const MovieSchema = SchemaFactory.createForClass(Movie);



