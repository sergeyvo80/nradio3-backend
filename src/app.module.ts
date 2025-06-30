import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
// import { ApolloError } from '@apollo/server';
import { StationModule } from './station/station.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,

      subscriptions: {
        'graphql-ws': true,
        'subscriptions-transport-ws': {
          keepAlive: 5000,
        },
      },
      autoSchemaFile: 'schema.gql',
      playground: true,
      introspection: true,
      // formatError: (err) =>
      //   new ApolloError(err.message, undefined, err.extensions),
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/nradio3'),
    // MongooseModule.forRoot(process.env.MONGO),
    StationModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
