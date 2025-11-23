import { IsEnum, IsString } from "class-validator";
import { typeTechnology } from "../entities/tecnologias.entity";

export class CreateTecnologiasDto{

    @IsString()
    name:string

    @IsEnum(typeTechnology)
    type?:typeTechnology
}