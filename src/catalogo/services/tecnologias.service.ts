import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Tecnologias } from "../entities/tecnologias.entity";
import { Repository } from "typeorm";

@Injectable()
export class TecnologiasService{
    constructor(
        @InjectRepository(Tecnologias, 'CHATBOTconnection')
        private readonly tecnologiasRepository: Repository<Tecnologias>,
    ){}

    findAll(catalogoId:number){
        return this.tecnologiasRepository.find({
            where:{
                catalogo:{
                    id:catalogoId
                }
            }
        })
    }

    findOne(id:number){
        return this.tecnologiasRepository.findOne({
            where:{
                id
            }
        })
    }
}