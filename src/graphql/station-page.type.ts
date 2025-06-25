import { ObjectType } from '@nestjs/graphql';
import { StationType } from './station.type';
import { Paginated } from './paginated';

@ObjectType('StationPage')
export class StationPage extends Paginated(StationType) {}
