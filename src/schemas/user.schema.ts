import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { GraphQLObjectID } from '../graphql/graphQLObjectID';
import { ObjectId } from 'mongodb';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ type: GraphQLObjectID })
  _id: ObjectId;

  @Prop({ optional: true })
  name: string;

  @Prop()
  role: string;

  @Prop()
  problem: boolean;

  @Prop({ description: 'Date of added' })
  dateAdded: Date;

  @Prop({ description: 'Date of updated' })
  dateUpdated: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
