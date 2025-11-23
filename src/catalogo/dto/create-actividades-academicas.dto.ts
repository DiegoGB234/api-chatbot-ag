import { Type } from "class-transformer";
import { IsOptional, IsString } from "class-validator";

export class CreateActividadesAcademicasDto{

    @Type(()=>Date)
    @IsOptional()
    date:Date

    @IsString()
    period:string
}