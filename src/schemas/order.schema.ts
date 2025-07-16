import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { GraphQLObjectID } from '../graphql/graphQLObjectID';
import { ObjectId } from 'mongodb';

export type OrderDocument = HydratedDocument<Order>;

@Schema()
export class Order {
  @Prop({ type: GraphQLObjectID })
  _id: ObjectId;

  @Prop({ optional: true })
  name: string;

  @Prop({ description: 'Date of added' })
  dateAdded: Date;

  @Prop({ description: 'Date of updated' })
  dateUpdated: Date;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
