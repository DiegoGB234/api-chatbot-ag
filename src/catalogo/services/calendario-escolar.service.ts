import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CalendarioEscolar } from "../entities/calendario-escolar.entity";
import { Repository } from "typeorm";

@Injectable()
export class CalendarioEscolarService{

    constructor(
        @InjectRepository(CalendarioEscolar, 'CHATBOTconnection')
        private readonly caledarioEscolarRepository:Repository<CalendarioEscolar>
    ){}

    findAll(catalogoId:number){
        return this.caledarioEscolarRepository.find({
            where:{
                catalogo:{id:catalogoId}
            }
        })
    }

    findOne(id:number){
        return this.caledarioEscolarRepository.findOne({
            where:{id}
        })
    }

}