import { ArgsType } from '@nestjs/graphql';
import { Types } from 'mongoose';
import { Field } from '@nestjs/graphql';
import { GraphQLObjectID } from 'src/graphql/graphQLObjectID';

@ArgsType()
export class GetCourseByIdArgs {
  @Field(() => GraphQLObjectID)
  courseId: Types.ObjectId;
}
