import { Controller, Get, Param } from "@nestjs/common";
import { ActividadesAcademicasServie } from "../services/actividades-academicas.service";

@Controller('actividades-academicas')
export class ActividadesAcademicasController{
    constructor(
        private readonly actividadesAcademicasService:ActividadesAcademicasServie
    ){}

    @Get(':id')
    findOne(@Param('id') id:string){
        return this.actividadesAcademicasService.findOne(+id)
    }

    @Get('catalogo/:id')
    findAll(@Param('id') id:string){
        return this.actividadesAcademicasService.findAll(+id)
    }


}   