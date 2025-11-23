import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Infraestructura } from "../entities/infraestructura.entity";
import { Repository } from "typeorm";

@Injectable()
export class Infraestructuraservice{
    constructor(
        @InjectRepository(Infraestructura, 'CHATBOTconnection')
        private readonly infraestructuraRepository: Repository<Infraestructura>,
    ){}

    findAll(catalogoId:number){
        return this.infraestructuraRepository.find({
            where:{
                catalogo:{
                    id:catalogoId
                }
            }
        })
    }

    findOne(id:number){
        return this.infraestructuraRepository.findOne({
            where:{
                id
            }
        })
    }
}