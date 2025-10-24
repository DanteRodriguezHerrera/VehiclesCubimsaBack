
import { Vehicle } from '../entities/vehicle.entity';

export const vehiclesProviders = [
    {
        provide: 'VehiclesRepository',
        useValue: Vehicle,
    },
];
