import { ArgsType } from '@nestjs/graphql';
import { Field } from '@nestjs/graphql';
import type { Types } from 'mongoose';

@ArgsType()
export class ItemIdArgs {
  @Field()
  _id: Types.ObjectId;
}
