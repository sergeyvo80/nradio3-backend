import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Document, Types } from 'mongoose';
// import { GraphQLObjectID } from '../../graphql/graphQLObjectID';
import { GraphQLObjectID } from 'src/graphql/graphQLObjectID';

@ObjectType('Station', { description: 'Station' })
export class StationType {
  @Field(() => GraphQLObjectID)
  _id: Types.ObjectId;

  @Field()
  name?: string;

  @Field()
  slug: string;

  @Field()
  title: string;

  @Field({ description: 'Website' })
  website: string;

  @Field({ description: 'Bitrate' })
  bitrate: string;

  @Field({ description: 'Stream' })
  stream: string;

  @Field({ description: 'Tags' })
  tags: string;

  @Field({ description: 'Disables' })
  disabled?: boolean;

  // @Field({ description: 'isLiked' })
  // isLiked: boolean;

  @Field({ description: 'Дата окончания ' })
  dateUpdated: Date;
}
