import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ActividadesAcademicas } from "../entities/actividades-academicas.entity";
import { Repository } from "typeorm";

@Injectable()
export class ActividadesAcademicasServie{
    constructor(
        @InjectRepository(ActividadesAcademicas, 'CHATBOTconnection')
        private readonly actividadesAcademicasRepository: Repository<ActividadesAcademicas>,
    ){}

    findAll(catalogoId:number){
        return this.actividadesAcademicasRepository.find({
            where:{
                catalogo:{
                    id:catalogoId
                }
            }
        })
    }

    findOne(id:number){
        return this.actividadesAcademicasRepository.findOne({
            where:{
                id
            }
        })
    }
}