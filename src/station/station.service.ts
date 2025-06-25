import { Injectable } from '@nestjs/common';
import { Station, StationDocument } from '../schemas/station.schema';
import { GetCourseByIdArgs } from './args/get-course-by-id.args';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';

@Injectable()
export class StationService {
  constructor(
    @InjectModel(Station.name) private courseModel: Model<StationDocument>,
  ) {}

  create(): string {
    const createdCourse = new this.courseModel({
      _id: new Types.ObjectId(),
      title: 'ss',
      name: 'sss',
    });
    createdCourse.save();

    return 'station service';
  }

  async findAll(): Promise<Station[]> {
    return [];
    // return this.courseModel.find().exec();
  }

  async getById(args: GetCourseByIdArgs): Promise<Station> {
    return this.courseModel
      .findOne({
        _id: args.courseId,
      })
      .exec();
  }
}
