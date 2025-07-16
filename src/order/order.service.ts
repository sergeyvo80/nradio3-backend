import { Injectable } from '@nestjs/common';
import { Order, OrderDocument } from '../schemas/order.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order.name) private orderModel: Model<OrderDocument>,
  ) {}

  async findAll(): Promise<Order[]> {
    return this.orderModel.find().exec();
  }

  async findFilter(filter = {}): Promise<Order[]> {
    return this.orderModel.find(filter).exec();
  }

  async syncTests(): Promise<Order[]> {
    const orders = await this.orderModel.find().exec();
    return orders;
  }

  async asyncTests(): Promise<Order[]> {
    const perPage = 10000;
    const countDocument = 1100000; //await this.orderModel.countDocuments({});
    const pageCount = Math.trunc(countDocument / perPage);
    const orders = [];
    const ordersPromiceArr = [];

    for (let page = 0; page < pageCount; page++) {
      const ordersPromice = this.orderModel
        .find()
        .skip(perPage * page)
        .limit(perPage)
        .exec();

      ordersPromiceArr.push(ordersPromice);
    }

    const ordersByPages = await Promise.all(ordersPromiceArr);
    ordersByPages.forEach((ordersByPage) => orders.push(...ordersByPage));

    // console.log('arrr', orders);

    return orders;
  }

  async reInitData(): Promise<void> {
    const date = new Date();

    const amount = 1000000;

    for (let i = 0; i < amount; i++) {
      const order = new this.orderModel({
        _id: new Types.ObjectId(),
        name: `order ${date}`,
        dateAdded: date,
        dateUpdated: date,
      });
      await order.save();
    }
  }
}
