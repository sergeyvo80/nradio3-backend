import { ArgsType } from '@nestjs/graphql';
import { Field } from '@nestjs/graphql';

@ArgsType()
export class GetStationBySlugArgs {
  @Field()
  slug: string;
}
