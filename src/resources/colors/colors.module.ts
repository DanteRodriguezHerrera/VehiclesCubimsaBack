import { Module } from '@nestjs/common';
import { ColorsService } from './colors.service';
import { ColorsController } from './colors.controller';
import { colorProviders } from './providers/color.providers';

@Module({
  controllers: [ColorsController],
  providers: [ColorsService, ...colorProviders],
})
export class ColorsModule { }
