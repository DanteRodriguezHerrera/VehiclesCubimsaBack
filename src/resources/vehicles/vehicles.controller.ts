import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VehiclesService } from './vehicles.service';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';

@Controller('vehicles')
export class VehiclesController {
  constructor(private readonly vehiclesService: VehiclesService) { }

  @Post()
  create(@Body() createVehicleDto: CreateVehicleDto) {
    return this.vehiclesService.create(createVehicleDto);
  }

  @Get()
  findAll() {
    return this.vehiclesService.findAll();
  }

  @Get(':idVehicle')
  findOne(@Param('idVehicle') idVehicle: string) {
    return this.vehiclesService.findOne(idVehicle);
  }

  @Patch(':idVehicle')
  update(@Param('idVehicle') idVehicle: string, @Body() updateVehicleDto: UpdateVehicleDto) {
    return this.vehiclesService.update(idVehicle, updateVehicleDto);
  }

  @Delete(':idVehicle')
  remove(@Param('idVehicle') idVehicle: string) {
    return this.vehiclesService.remove(idVehicle);
  }
}
