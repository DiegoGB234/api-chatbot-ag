import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { PreguntasFrecuentes } from "../entities/preguntas-frecuentes.entity";
import { Repository } from "typeorm";

@Injectable()
export class PreguntasFrecuentesService{
    constructor(
        @InjectRepository(PreguntasFrecuentes, 'CHATBOTconnection')
        private readonly preguntasfrecuentesRepository: Repository<PreguntasFrecuentes>,
    ){}

    findAll(catalogoId:number){
        return this.preguntasfrecuentesRepository.find({
            where:{
                catalogo:{
                    id:catalogoId
                }
            }
        })
    }

    findOne(id:number){
        return this.preguntasfrecuentesRepository.findOne({
            where:{
                id
            }
        })
    }
}