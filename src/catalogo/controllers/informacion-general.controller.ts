import { Controller, Get, Param } from "@nestjs/common";
import { InformacionGeneralService } from "../services/informacion-general.service";

@Controller('informacion-general')
export class InformacionGeneralController{

    constructor(
        private readonly informacionGeneralService:InformacionGeneralService
    ){}

    @Get(':id')
    findOne(@Param('id') id:string){
        return this.informacionGeneralService.findOne(+id)
    }

    @Get('catalogo/:id')
    findAll(@Param('id') id:string){  
        return this.informacionGeneralService.findAll(+id)
    }
}