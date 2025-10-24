import { Inject, Injectable } from '@nestjs/common';
import { CreateEngineDto } from './dto/create-engine.dto';
import { UpdateEngineDto } from './dto/update-engine.dto';
import { Engine } from './entities/engine.entity';
import { v4 as uuid } from 'uuid'

@Injectable()
export class EnginesService {

  constructor(
    @Inject('EngineRepository')
    private readonly engineRepository: typeof Engine
  ) { }

  async create(createEngineDto: CreateEngineDto) {
    try {
      const newEngine = {
        idEngine: uuid(),
        ...createEngineDto
      }

      const engine = await this.engineRepository.create(newEngine);
      return {
        message: 'Engine created successfully',
        data: engine
      }
    } catch (error) {
      return { error }
    }
  }

  async findAll() {
    try {
      const engines = await this.engineRepository.findAll();
      if (!engines) return { message: 'Cannot find register of engines' }
      return {
        message: 'Engines found correctly',
        data: engines
      }
    } catch (error) {
      return { error }
    }
  }

  async findOne(idEngine: string) {
    try {
      const engine = await this.engineRepository.findByPk(idEngine);
      if (!engine) return { message: 'Cannot find register of engine' }
      return {
        message: 'Engine found correctly',
        data: engine
      }
    } catch (error) {
      return { error }
    }
  }

  async update(idEngine: string, updateEngineDto: UpdateEngineDto) {
    try {
      const engine = await this.engineRepository.findByPk(idEngine);
      if (!engine) return { message: 'Cannot find register of engine' }
      await engine.update(updateEngineDto);
      return {
        message: 'Engine updated correctly',
        data: engine
      }
    } catch (error) {
      return { error }
    }
  }

  async remove(idEngine: string) {
    try {
      const engine = await this.engineRepository.findByPk(idEngine);
      if (!engine) return { message: 'Cannot find register of engine' }
      await engine.destroy();
      return {
        message: 'Engine deleted correctly',
        data: engine
      }
    } catch (error) {
      return { error }
    }
  }
}
