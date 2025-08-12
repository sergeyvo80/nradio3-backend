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
  uuid?: string;

  @Prop({ optional: true })
  name?: string;

  @Prop()
  slug: string;

  @Prop()
  title: string;

  @Prop({ optional: true })
  description: string;

  @Prop({ description: 'Website', optional: true })
  website: string;

  @Prop({ description: 'Bitrate', optional: true })
  bitrate: string;

  @Prop({ description: 'Stream' })
  stream: string;

  @Prop({ description: 'Tags', optional: true })
  tags: string[];

  @Prop({ description: 'Disables', optional: true })
  disabled: boolean;

  @Prop({ description: 'Date of added' })
  dateAdded: Date;

  @Prop({ description: 'Date of updated' })
  dateUpdated: Date;
}

export const StationSchema = SchemaFactory.createForClass(Station);
