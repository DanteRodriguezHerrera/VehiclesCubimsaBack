import { IsNotEmpty, IsString } from "class-validator";

export class CreateColorDto {

    @IsNotEmpty({ message: 'Name cannot be empty' })
    @IsString({ message: 'Name must be a string' })
    name: string;

    @IsNotEmpty({ message: 'The hexCode cannot be empty' })
    @IsString({ message: 'The hexCode must be a string' })
    hexCode: string;
}
