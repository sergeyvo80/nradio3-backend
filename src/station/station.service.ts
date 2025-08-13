import { Injectable } from '@nestjs/common';
import { Station, StationDocument } from '../schemas/station.schema';
import { GetStationByIdArgs } from './args/get-station-by-id.args';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { GetStationsByTagsArgs } from './args/get-stations-by-tags.args';
import { GetStationBySlugArgs } from './args/get-station-by-slug.args';
import { CreateStationArgs } from './args/create-station.args';
import { UpdateStationArgs } from './args/update-station.args';
import { PublishStationArgs } from './args/publish-station.args';

@Injectable()
export class StationService {
  constructor(
    @InjectModel(Station.name) private stationModel: Model<StationDocument>,
  ) {}

  async findAll(): Promise<Station[]> {
    return this.stationModel.find({ disabled: false }).exec();
  }

  async findByTags(args: GetStationsByTagsArgs): Promise<Station[]> {
    return this.stationModel.find({ tags: { $in: args.tags } }).exec();
  }

  async getById(args: GetStationByIdArgs): Promise<Station> {
    return this.stationModel.findOne({ _id: args._id }).exec();
  }

  async getBySlug(args: GetStationBySlugArgs): Promise<Station> {
    return this.stationModel.findOne({ slug: args.slug }).exec();
  }

  async create(args: CreateStationArgs): Promise<Station> {
    const date = new Date();

    const station = new this.stationModel({
      ...args,
      _id: new Types.ObjectId(),
      uuid: '',
      dateAdded: date,
      dateUpdated: date,
    });
    await station.save();

    return station;
  }

  async publish(args: PublishStationArgs): Promise<Station> {
    const date = new Date();
    const station = new this.stationModel({
      ...args,
      name: args.title,
      // slug: args.uuid,
      disabled: true,
      bitrate: '',
      _id: new Types.ObjectId(),
      dateAdded: date,
      dateUpdated: date,
    });
    await station.save();

    return station;
  }

  async updateById(args: UpdateStationArgs): Promise<Station> {
    const date = new Date();

    return this.stationModel.findOneAndUpdate(
      { _id: args._id },
      {
        $set: {
          ...args,
          dateUpdated: date,
        },
      },
    );
  }

  async delete(args: GetStationByIdArgs): Promise<boolean> {
    try {
      const result = await this.stationModel
        .deleteOne({ _id: args._id })
        .exec();
      return result.deletedCount > 0;
    } catch (e: unknown) {
      console.error(e);
      throw e;
    }
  }
}
