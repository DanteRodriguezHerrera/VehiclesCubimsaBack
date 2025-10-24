import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EnginesService } from './engines.service';
import { CreateEngineDto } from './dto/create-engine.dto';
import { UpdateEngineDto } from './dto/update-engine.dto';

@Controller('engines')
export class EnginesController {
  constructor(private readonly enginesService: EnginesService) { }

  @Post()
  create(@Body() createEngineDto: CreateEngineDto) {
    return this.enginesService.create(createEngineDto);
  }

  @Get()
  findAll() {
    return this.enginesService.findAll();
  }

  @Get(':idEngine')
  findOne(@Param('idEngine') idEngine: string) {
    return this.enginesService.findOne(idEngine);
  }

  @Patch(':idEngine')
  update(@Param('idEngine') idEngine: string, @Body() updateEngineDto: UpdateEngineDto) {
    return this.enginesService.update(idEngine, updateEngineDto);
  }

  @Delete(':idEngine')
  remove(@Param('idEngine') idEngine: string) {
    return this.enginesService.remove(idEngine);
  }
}
