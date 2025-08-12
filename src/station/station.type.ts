import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Document, Types } from 'mongoose';
// import { GraphQLObjectID } from '../../graphql/graphQLObjectID';
import { GraphQLObjectID } from '../graphql/graphQLObjectID';

@ObjectType('Course', { description: 'Курс' })
export class CourseType {
  @Field(() => GraphQLObjectID)
  _id: Types.ObjectId;

  @Field()
  uuid?: string;

  @Field()
  name?: string;

  @Field()
  program: string;

  @Field({ description: 'Место' })
  where: string;

  @Field({ description: 'Объем в часах' })
  hours: string;

  @Field({ description: 'Руководитель' })
  head: string;

  @Field({ description: 'Секретарь' })
  secretary: string;

  @Field({ description: 'Город' })
  city: string;

  @Field({ description: 'Дата начала' })
  dateStart: Date;

  @Field({ description: 'Дата окончания ' })
  dateEnd: Date;

  @Field({ description: 'Дата выдачи диплома' })
  dateOfIssue: Date;
}
