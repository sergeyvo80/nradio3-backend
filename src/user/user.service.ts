import { Injectable } from '@nestjs/common';
import { User, UserDocument } from '../schemas/user.schema';
// import { GetStationByIdArgs } from './args/get-station-by-id.args';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
// import { GetStationsByTagsArgs } from './args/get-stations-by-tags.args';
// import { GetStationBySlugArgs } from './args/get-station-by-slug.args';
// import { CreateStationArgs } from './args/create-station.args';
// import { UpdateStationArgs } from './args/update-station.args';

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

  // async findByTags(args: GetStationsByTagsArgs): Promise<Station[]> {
  //   return this.stationModel.find({ tags: { $in: args.tags } }).exec();
  // }

  // async getById(args: GetStationByIdArgs): Promise<Station> {
  //   return this.stationModel.findOne({ _id: args._id }).exec();
  // }

  // async getBySlug(args: GetStationBySlugArgs): Promise<Station> {
  //   return this.stationModel.findOne({ slug: args.slug }).exec();
  // }

  // async create(args: CreateStationArgs): Promise<Station> {
  //   const date = new Date();
  //   const station = new this.stationModel({
  //     ...args,
  //     _id: new Types.ObjectId(),
  //     dateAdded: date,
  //     dateUpdated: date,
  //   });
  //   await station.save();

  //   return station;
  // }

  // async updateById(args: UpdateStationArgs): Promise<Station> {
  //   const date = new Date();

  //   return this.stationModel.findOneAndUpdate(
  //     { _id: args._id },
  //     {
  //       $set: {
  //         ...args,
  //         dateUpdated: date,
  //       },
  //     },
  //   );
  // }

  // async delete(args: GetStationByIdArgs): Promise<boolean> {
  //   try {
  //     const result = await this.stationModel
  //       .deleteOne({ _id: args._id })
  //       .exec();
  //     return result.deletedCount > 0;
  //   } catch (e: unknown) {
  //     console.error(e);
  //     throw e;
  //   }
  // }
}
