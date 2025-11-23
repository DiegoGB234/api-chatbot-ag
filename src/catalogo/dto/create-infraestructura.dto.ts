import { IsString } from "class-validator"

export class CreateInfraestructuraDto{

    @IsString()
    name:string

    @IsString()
    description:string
}