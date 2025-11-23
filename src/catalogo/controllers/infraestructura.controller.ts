import { Controller, Get, Param } from "@nestjs/common";
import { Infraestructuraservice } from "../services/infraestructura.service";

@Controller('infraestructure')
export class InfraestructuraController{

    constructor(
        private readonly infraestructuraService:Infraestructuraservice
    ){}

    @Get(':id')
    findOne(@Param('id') id:string){
        return this.infraestructuraService.findOne(+id)
    }

    @Get('catalogo/:id')
    findAll(@Param('id') id:string){
        return this.infraestructuraService.findAll(+id)
    }
}