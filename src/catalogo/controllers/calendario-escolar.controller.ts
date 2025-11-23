import { Controller, Get, Param } from "@nestjs/common";
import { CalendarioEscolarService } from "../services/calendario-escolar.service";

@Controller('calendario-escolar')
export class CalendarioEscolarController{
    constructor(
        private readonly calendarioEscolarService:CalendarioEscolarService
    ){}

    @Get('catalogo/:id')
    findAll(@Param('id') id:string){
        return this.calendarioEscolarService.findAll(+id)
    }

    @Get(':id')
    findOne(@Param('id') id:string){
        return this.calendarioEscolarService.findOne(+id)
    }
}