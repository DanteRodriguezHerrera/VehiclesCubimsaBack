
import { Color } from '../entities/color.entity';

export const colorProviders = [
    {
        provide: 'ColorRepository',
        useValue: Color,
    },
];
