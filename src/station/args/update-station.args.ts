import { ArgsType, Field } from '@nestjs/graphql';
import { Types } from 'mongoose';
import { GraphQLObjectID } from 'src/graphql/graphQLObjectID';

@ArgsType()
export class UpdateStationArgs {
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
  tags: string[];

  @Field({ description: 'Disabled' })
  disabled?: boolean;
}
