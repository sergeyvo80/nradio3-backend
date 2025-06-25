import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { GraphQLObjectID } from '../graphql/graphQLObjectID';
import { ObjectId } from 'mongodb';

export type StationDocument = HydratedDocument<Station>;

@Schema()
export class Station {
  @Prop({ type: GraphQLObjectID })
  _id: ObjectId;

  @Prop({ optional: true })
  name?: string;

  @Prop()
  slug: string;

  @Prop()
  title: string;

  @Prop({ description: 'Website' })
  website: string;

  @Prop({ description: 'Bitrate' })
  bitrate: string;

  @Prop({ description: 'Stream' })
  stream: string;

  @Prop({ description: 'Tags' })
  tags: string;

  @Prop({ description: 'Disables' })
  disabled: boolean;

  @Prop({ description: 'isLiked' })
  isLiked: boolean;

  @Prop({ description: 'Дата окончания ' })
  dateUpdated: Date;
}

export const StationSchema = SchemaFactory.createForClass(Station);
