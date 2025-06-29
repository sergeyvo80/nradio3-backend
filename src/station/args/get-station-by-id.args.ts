import { ArgsType } from '@nestjs/graphql';
import { Types } from 'mongoose';
import { Field } from '@nestjs/graphql';
import { GraphQLObjectID } from '../../graphql/graphQLObjectID';

@ArgsType()
export class GetStationByIdArgs {
  @Field(() => GraphQLObjectID)
  _id: Types.ObjectId;
}
