import { Module } from '@nestjs/common';
import { EnginesService } from './engines.service';
import { EnginesController } from './engines.controller';
import { engineProviders } from './providers/engine.providers';

@Module({
  controllers: [EnginesController],
  providers: [EnginesService, ...engineProviders],
})
export class EnginesModule { }
