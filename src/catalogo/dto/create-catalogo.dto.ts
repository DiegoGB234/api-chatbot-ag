import { IsString } from "class-validator";

export class CreateCatalogoDto {
    @IsString()
    name:string
    @IsString()
    description:string;
}
