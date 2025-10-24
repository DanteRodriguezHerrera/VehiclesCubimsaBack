import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateVehicleDto {

    @IsNotEmpty({ message: 'Model must be not empty' })
    @IsString({ message: 'Model must be a string' })
    model: string;

    @IsNotEmpty({ message: 'Year must be not empty' })
    @IsString({ message: 'Year must be a string' })
    year: string;

    @IsNotEmpty({ message: 'The idColor must be not empty' })
    @IsString({ message: 'The idColor must be a string' })
    color: string;

    @IsNotEmpty({ message: 'Cost must be not empty' })
    @IsNumber({}, { message: 'Cost must be a number' })
    cost: number;

    @IsNotEmpty({ message: 'The idEngine must be not empty' })
    @IsString({ message: 'The idEngine must be a string' })
    engine: string;

    @IsNotEmpty({ message: 'Number of doors must be not empty' })
    @IsNumber({}, { message: 'Number of doors must be a number' })
    doors: number;
}
