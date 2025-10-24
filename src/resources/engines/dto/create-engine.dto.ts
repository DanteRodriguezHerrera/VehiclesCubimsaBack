import { IsNotEmpty, IsString } from "class-validator";

export class CreateEngineDto {

    @IsNotEmpty({ message: 'Engine type cannot be empty' })
    @IsString({ message: 'Engine type must be a string' })
    engineType: string;
}
