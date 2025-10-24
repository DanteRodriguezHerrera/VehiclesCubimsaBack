import { Inject, Injectable } from '@nestjs/common';
import { CreateColorDto } from './dto/create-color.dto';
import { UpdateColorDto } from './dto/update-color.dto';
import { Color } from './entities/color.entity';
import { v4 as uuid } from 'uuid'

@Injectable()
export class ColorsService {

  constructor(
    @Inject('ColorRepository')
    private readonly colorRepository: typeof Color,
  ) { }

  async create(createColorDto: CreateColorDto) {
    try {
      const newColor = {
        idColor: uuid(),
        ...createColorDto
      }

      const color = await this.colorRepository.create(newColor);
      return {
        message: 'Color add successfully',
        data: color
      }
    } catch (error) {
      return { error }
    }
  }

  async findAll() {
    try {
      const colors = await this.colorRepository.findAll();
      if (!colors) return { message: 'Cannot find registers of colors' }
      return {
        message: 'Colors found correctly',
        data: colors
      }
    } catch (error) {
      return { error }
    }
  }

  async findOne(idColor: string) {
    try {
      const color = await this.colorRepository.findByPk(idColor)
      if (!color) return { message: 'Color nof found' }
      return {
        message: 'Color found correctly',
        data: color
      }
    } catch (error) {
      return { error }
    }
  }

  async update(idColor: string, updateColorDto: UpdateColorDto) {
    try {
      const color = await this.colorRepository.findByPk(idColor)
      if (!color) return { message: 'Color nof found' }
      await color.update(updateColorDto)
      return {
        message: 'Color updated correctly',
        data: color
      }
    } catch (error) {
      return { error }
    }
  }

  async remove(idColor: string) {
    try {
      const color = await this.colorRepository.findByPk(idColor)
      if (!color) return { message: 'Color nof found' }
      await color.destroy()
      return {
        message: 'Color deleted correctly',
        data: color
      }
    } catch (error) {
      return { error }
    }
  }
}
