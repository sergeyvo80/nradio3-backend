import { Injectable } from '@nestjs/common';
import { Station, StationDocument } from '../schemas/station.schema';
import { GetStationByIdArgs } from './args/get-station-by-id.args';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { GetStationsByTagsArgs } from './args/get-stations-by-tags.args';
import { GetStationBySlugArgs } from './args/get-station-by-slug.args';

@Injectable()
export class StationService {
  constructor(
    @InjectModel(Station.name) private stationModel: Model<StationDocument>,
  ) {}

  create(): string {
    const createdCourse = new this.stationModel({
      _id: new Types.ObjectId(),
      title: 'ss',
      name: 'sss',
    });
    createdCourse.save();

    return 'station service';
  }

  async findAll(): Promise<Station[]> {
    return this.stationModel.find().exec();
  }

  async findByTags(args: GetStationsByTagsArgs): Promise<Station[]> {
    return this.stationModel.find({ tags: { $in: args.tags } }).exec();
  }

  async getById(args: GetStationByIdArgs): Promise<Station> {
    return this.stationModel
      .findOne({
        _id: args.stationId,
      })
      .exec();
  }

  async getBySlug(args: GetStationBySlugArgs): Promise<Station> {
    return this.stationModel
      .findOne({
        _id: args.slug,
      })
      .exec();
  }
}
