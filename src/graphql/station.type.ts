import { Field, ObjectType } from '@nestjs/graphql';
import { Types } from 'mongoose';
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

  @Field(() => [String])
  declare tags: string[];

  @Field({ description: 'Disabled' })
  disabled?: boolean;

  @Field({ description: 'Date of added' })
  dateAdded: Date;

  @Field({ description: 'Date of updated' })
  dateUpdated: Date;
}
