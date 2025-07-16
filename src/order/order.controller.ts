import { Body, Controller, Get, Post } from '@nestjs/common';
// import { AppService } from './app.service';

import { OrderService } from './order.service';

@Controller()
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post('/api/order/async')
  async asyncTests(@Body() body: any) {
    const startSync = new Date();
    const itemsSync = await this.orderService.syncTests();
    const stopSync = new Date();

    const startAsync = new Date();
    const itemsAsync = await this.orderService.asyncTests();
    const stopAsync = new Date();

    return {
      startSync,
      stopSync,
      coSync: itemsSync.length,
      startAsync,
      stopAsync,
      coAsync: itemsAsync.length,
    };
  }

  @Post('/api/order/add1000')
  async reInitData(@Body() body: any) {
    // const { user_role = 'admin' } = body;
    const items = await this.orderService.reInitData();
    return items;
  }

  // @Get('/api/user/problem')
  // async getUserProblem() {
  //   const items = await this.userService.findFilter({ problem: true });
  //   return items;
  // }

  @Get('/api/order/all')
  async getOrderAll() {
    const items = await this.orderService.findAll();
    return items;
  }
}
