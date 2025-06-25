import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { StationService } from './station.service';
// import { Course } from './models/course.model';
import { StationPage } from '../graphql/station-page.type';
import { GetCourseByIdArgs } from './args/get-course-by-id.args';
import { StationType } from '../graphql/station.type';

@Resolver()
export class StationResolver {
  constructor(private readonly stationService: StationService) {}

  @Query(() => StationPage, { description: 'Получить список курсов' })
  async stations() {
    const items = await this.stationService.findAll();

    return {
      items,
    };
  }

  @Query(() => StationType, { description: 'Получить Курс' })
  async getCourseById(@Args() args: GetCourseByIdArgs) {
    const course = await this.stationService.getById(args);

    return course;
  }
}
