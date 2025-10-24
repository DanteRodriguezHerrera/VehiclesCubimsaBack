import { Inject, Injectable } from '@nestjs/common';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
import { Vehicle } from './entities/vehicle.entity';
import { v4 as uuid } from 'uuid'
import { Color } from '../colors/entities/color.entity';
import { Engine } from '../engines/entities/engine.entity';

@Injectable()
export class VehiclesService {

  constructor(
    @Inject('VehiclesRepository')
    private readonly vehiclesRepository: typeof Vehicle,
  ) { }


  async create(createVehicleDto: CreateVehicleDto) {
    try {
      const newVehicle = {
        idVehicle: uuid(),
        ...createVehicleDto
      }

      const vehicle = await this.vehiclesRepository.create(newVehicle);
      return {
        message: 'Th vehicle has created successfully',
        data: vehicle
      }
    } catch (error) {
      console.log(error)
      return error
    }
  }

  async findAll() {
    try {
      const vehicles = await this.vehiclesRepository.findAll({
        attributes: [
          'idVehicle',
          'model',
          'year',
          'cost',
          'doors'
        ],
        include: [
          {
            model: Color
          },
          {
            model: Engine
          }
        ]
      });
      if (!vehicles) return { message: 'Cannot find any register of vehicles' };
      return {
        message: 'Find all the vehicles correctly',
        data: vehicles
      }
    } catch (error) {
      console.log(error)
    }
  }

  async findOne(idVehicle: string) {
    try {
      const vehicle = await this.vehiclesRepository.findByPk(idVehicle);
      if (!vehicle) return { message: 'Cannot find this vehicle' }
      return {
        message: 'Find the vehicle correctly',
        data: vehicle
      }
    } catch (error) {
      console.log(error)
    }
  }

  async update(idVehicle: string, updateVehicleDto: UpdateVehicleDto) {
    try {
      const vehicle = await this.vehiclesRepository.findByPk(idVehicle);
      if (!vehicle) return { message: 'Cannot find this vehicle' }
      await vehicle.update(updateVehicleDto);
      return {
        message: 'Find the vehicle correctly',
        data: vehicle
      }
    } catch (error) {
      console.log(error)
    }
  }

  async remove(idVehicle: string) {
    try {
      const vehicle = await this.vehiclesRepository.findByPk(idVehicle);
      if (!vehicle) return { message: 'Cannot find this vehicle' }
      await vehicle.destroy();
      return {
        message: 'Delete the vehicle correctly',
        data: vehicle
      }
    } catch (error) {
      console.log(error)
    }
  }
}
