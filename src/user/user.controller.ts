import { Body, Controller, Get, Post } from '@nestjs/common';
// import { AppService } from './app.service';

import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/api/user/disable-problems')
  async disableProblems(@Body() body: any) {
    const { user_role = 'admin' } = body;
    let count_changed = 0;

    const MAX_USERS_PER_REQUEST = 1000;
    let usersToProcess = [];

    try {
      // Получаем первые 1000 пользователей с указанной ролью
      const query = this.userService
        .getUserModel()
        .find({ role: user_role })
        .limit(MAX_USERS_PER_REQUEST);
      usersToProcess = await query.exec();

      while (usersToProcess.length > 0) {
        for (const user of usersToProcess) {
          if (!user.problem) continue;

          user.problem = false;

          await user.save();
          count_changed++;
        }

        // Обновляем запрос для получения следующих 1000 пользователей
        query.skip(count_changed).limit(MAX_USERS_PER_REQUEST);
        usersToProcess = await query.exec();
      }
      return count_changed;
    } catch (error) {
      console.error('Error updating users:', error);
      // res.status(500).send('Internal Server Error');
    }

    const items = await this.userService.findAll();
    return { count_changed, items };
  }

  @Post('/api/user/re-init')
  async reInitData(@Body() body: any) {
    const { user_role = 'admin' } = body;
    const items = await this.userService.reInitData(user_role);
    return items;
  }

  @Get('/api/user/problem')
  async getUserProblem() {
    const items = await this.userService.findFilter({ problem: true });
    return items;
  }

  @Get('/api/user/all')
  async getUserAll() {
    const items = await this.userService.findAll();
    return items;
  }
}
