import { Controller, Get, Param } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { PreguntasFrecuentes } from "../entities/preguntas-frecuentes.entity";
import { Repository } from "typeorm";
import { PreguntasFrecuentesService } from "../services/preguntas-frecuentes.service";

@Controller('preguntas-frecuentes')
export class PreguntasFrecuentesController{
    constructor(
       private readonly preguntasFrecuentesService:PreguntasFrecuentesService
    ){}

    @Get('catalogo/:id')
    findAll(@Param('id') id:string){
        return this.preguntasFrecuentesService.findAll(+id)
    }

    @Get(':id')
    findOne(@Param('id') id:string){
        return this.preguntasFrecuentesService.findOne(+id)
    }
}