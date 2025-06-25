import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StationResolver } from './station.resolver';
import { StationService } from './station.service';
import { Station, StationSchema } from '../schemas/station.schema';

@Module({
  exports: [StationService],
  imports: [
    MongooseModule.forFeature([{ name: Station.name, schema: StationSchema }]),
  ],
  providers: [StationResolver, StationService],
})
export class StationModule {}
