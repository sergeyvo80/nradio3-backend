import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class CreateStationArgs {
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
