import { IsArray, ValidateNested } from "class-validator";
import { CreateCatalogoDto } from "./create-catalogo.dto";
import { Type } from "class-transformer";
import { CreateActividadesAcademicasDto } from "./create-actividades-academicas.dto";
import { CreateInformacionGeneralDto } from "./create-informacion-general.dto";
import { CreateInfraestructuraDto } from "./create-infraestructura.dto";
import { CreatePreguntasFrecuentesDto } from "./create-preguntas-frecuentes.dto";
import { CreateTecnologiasDto } from "./create-tecnologias.dto";

export class CreateRegisterCatalogoDto extends CreateCatalogoDto{
   
    @IsArray()
    @ValidateNested({each:true})
    @Type(()=>CreateActividadesAcademicasDto)
    actividadesAcademicas:CreateActividadesAcademicasDto[]

    @IsArray()
    @ValidateNested({each:true})
    @Type(()=>CreateInformacionGeneralDto)
    informacionGeneral:CreateInformacionGeneralDto[]

    @IsArray()
    @ValidateNested({each:true})
    @Type(()=>CreateInfraestructuraDto)
    infraestructura:CreateInfraestructuraDto[]

    @IsArray()
    @ValidateNested({each:true})
    @Type(()=>CreatePreguntasFrecuentesDto)
    preguntasFrecuentes:CreatePreguntasFrecuentesDto[]

    @IsArray()
    @ValidateNested({each:true})
    @Type(()=>CreateTecnologiasDto)
    tecnologias:CreateTecnologiasDto[]


    

}