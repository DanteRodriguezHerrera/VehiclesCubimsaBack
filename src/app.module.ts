import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { VehiclesModule } from './resources/vehicles/vehicles.module';
import { Vehicle } from './resources/vehicles/entities/vehicle.entity';
import { EnginesModule } from './resources/engines/engines.module';
import { Engine } from './resources/engines/entities/engine.entity';
import { ColorsModule } from './resources/colors/colors.module';
import { Color } from './resources/colors/entities/color.entity';


@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: '8zgiah.h.filess.io',
      port: 3306,
      username: 'VehiculosCubimsa_usemiddle',
      password: 'ad677d53d78dbc4c23c14a2e64f3f01683a1dbb9',
      database: 'VehiculosCubimsa_usemiddle',
      models: [
        Vehicle,
        Engine,
        Color
      ],
    }),
    VehiclesModule,
    EnginesModule,
    ColorsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
