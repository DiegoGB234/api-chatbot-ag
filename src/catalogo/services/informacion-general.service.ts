import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { InformacionGeneral } from "../entities/informacion-general.entity";
import { Repository } from "typeorm";

@Injectable()
export class InformacionGeneralService{
    constructor(
        @InjectRepository(InformacionGeneral, 'CHATBOTconnection')
        private readonly informacionGeneralRepository: Repository<InformacionGeneral>,
    ){}

    findAll(catalogoId:number){
        return this.informacionGeneralRepository.find({
            where:{
                catalogo:{
                    id:catalogoId
                }
            }
        })
    }

    findOne(id:number){
        return this.informacionGeneralRepository.findOne({
            where:{
                id
            }
        })
    }
}