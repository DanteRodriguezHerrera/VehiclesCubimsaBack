import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ColorsService } from './colors.service';
import { CreateColorDto } from './dto/create-color.dto';
import { UpdateColorDto } from './dto/update-color.dto';

@Controller('colors')
export class ColorsController {
  constructor(private readonly colorsService: ColorsService) { }

  @Post()
  create(@Body() createColorDto: CreateColorDto) {
    return this.colorsService.create(createColorDto);
  }

  @Get()
  findAll() {
    return this.colorsService.findAll();
  }

  @Get(':idColor')
  findOne(@Param('idColor') idColor: string) {
    return this.colorsService.findOne(idColor);
  }

  @Patch(':idColor')
  update(@Param('idColor') idColor: string, @Body() updateColorDto: UpdateColorDto) {
    return this.colorsService.update(idColor, updateColorDto);
  }

  @Delete(':idColor')
  remove(@Param('idColor') idColor: string) {
    return this.colorsService.remove(idColor);
  }
}
