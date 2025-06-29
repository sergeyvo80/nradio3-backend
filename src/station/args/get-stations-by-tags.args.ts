import { ArgsType } from '@nestjs/graphql';
import { Field } from '@nestjs/graphql';

@ArgsType()
export class GetStationsByTagsArgs {
  @Field(() => [String])
  declare tags: string[];
}
