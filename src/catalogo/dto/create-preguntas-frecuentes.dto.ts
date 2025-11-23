import { IsString } from "class-validator"

export class CreatePreguntasFrecuentesDto{
    
    @IsString()
    question:string
    @IsString()
    answer:string
}
