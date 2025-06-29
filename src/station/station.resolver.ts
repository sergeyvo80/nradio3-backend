import { Args, Query, Resolver, Mutation } from '@nestjs/graphql';
import { StationService } from './station.service';
import { StationPage } from '../graphql/station-page.type';
import { GetStationByIdArgs } from './args/get-station-by-id.args';
import { GetStationsByTagsArgs } from './args/get-stations-by-tags.args';
import { StationType } from '../graphql/station.type';
import { GetStationBySlugArgs } from './args/get-station-by-slug.args';
import { CreateStationArgs } from './args/create-station.args';
import { UpdateStationArgs } from './args/update-station.args';

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

  @Query(() => StationType, { description: 'Получить станцию по id' })
  async getStationById(@Args() args: GetStationByIdArgs) {
    return this.stationService.getById(args);
  }

  @Query(() => StationType, { description: 'Получить станцию по slug' })
  async getStationBySlug(@Args() args: GetStationBySlugArgs) {
    return this.stationService.getBySlug(args);
  }

  @Mutation(() => StationType, { description: 'Создание станции' })
  async createStation(@Args() args: CreateStationArgs): Promise<StationType> {
    return this.stationService.create(args);
  }

  @Mutation(() => StationType, { description: 'Обновление станции' })
  async updateStationById(
    @Args() args: UpdateStationArgs,
  ): Promise<StationType> {
    return this.stationService.updateById(args);
  }

  @Mutation(() => Boolean, { description: 'Удаление станции' })
  async deleteStationById(@Args() args: GetStationByIdArgs): Promise<boolean> {
    return this.stationService.delete(args);
  }
}
