import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class PublishStationArgs {
  @Field()
  uuid: string;

  @Field()
  slug: string;

  @Field()
  title: string;

  @Field()
  description?: string;

  @Field()
  website?: string;

  @Field()
  stream: string;

  @Field(() => [String])
  tags?: string[];
}
