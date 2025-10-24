
import { Engine } from '../entities/engine.entity';

export const engineProviders = [
    {
        provide: 'EngineRepository',
        useValue: Engine,
    },
];
