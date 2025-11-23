import { IsString } from "class-validator";

export class CreateInformacionGeneralDto{

    @IsString()
    title:string

    @IsString()
    content:string
}