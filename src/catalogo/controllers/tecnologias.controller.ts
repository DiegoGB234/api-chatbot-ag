import { Controller, Get, Param } from "@nestjs/common";
import { TecnologiasService } from "../services/tecnologias.service";

@Controller('tecnologias')
export class TecnologiasController{
    constructor(
        private readonly tecnologiasService:TecnologiasService
    ){}

    @Get('catalogo/:id')
    findAll(@Param('id') id:number){
        return this.tecnologiasService.findAll(+id)
    }

    @Get(':id')
    findOne(@Param('id') id:string){
        return this.tecnologiasService.findOne(+id)
    }
}