import { Injectable } from '@nestjs/common';
import { User, UserDocument } from '../schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findFilter(filter = {}): Promise<User[]> {
    return this.userModel.find(filter).exec();
  }

  getUserModel() {
    return this.userModel;
  }

  async reInitData(user_role = 'admin'): Promise<void> {
    // const roles = ['admin', 'user'];
    // const randomRole = Math.floor(Math.random() * roles.length);
    // const randomProblem = Boolean(Math.floor(Math.random() * 2));

    const date = new Date();

    const user = new this.userModel({
      _id: new Types.ObjectId(),
      name: `user ${date}`,
      role: user_role, // roles[randomRole],
      problem: true, //randomProblem,
      dateAdded: date,
      dateUpdated: date,
    });
    await user.save();
  }
}
