import { Args, Query, Resolver } from '@nestjs/graphql';
import { StationService } from './station.service';
import { StationPage } from '../graphql/station-page.type';
import { GetStationByIdArgs } from './args/get-station-by-id.args';
import { GetStationsByTagsArgs } from './args/get-stations-by-tags.args';
import { StationType } from '../graphql/station.type';
import { GetStationBySlugArgs } from './args/get-station-by-slug.args';

@Resolver()
export class StationResolver {
  constructor(private readonly stationService: StationService) {}

  @Query(() => StationPage, { description: 'Получить список станций' })
  async getStations() {
    const items = await this.stationService.findAll();

    return {
      items,
    };
  }

  @Query(() => StationPage, { description: 'Получить список станций' })
  async getStationsByTags(@Args() args: GetStationsByTagsArgs) {
    const items = await this.stationService.findByTags(args);

    return {
      items,
    };
  }

  @Query(() => StationType, { description: 'Получить станцию' })
  async getStationById(@Args() args: GetStationByIdArgs) {
    const station = await this.stationService.getById(args);

    return station;
  }

  @Query(() => StationType, { description: 'Получить станцию' })
  async getStationBySlug(@Args() args: GetStationBySlugArgs) {
    const station = await this.stationService.getBySlug(args);

    return station;
  }
}
