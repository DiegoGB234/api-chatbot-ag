import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Catalogo } from "./catalogo.entity";

export enum typeTechnology{
    LANGUAGE='Lenguaje',
    FRONTEND_FRAMEWORK='Framework Frontend',
    BACKEND_FRAMEWORK='Framework Backend',
    DATABASE='Base de Datos',
    AI_PLATFORM='Platafforma de IA',
    IDE='IDE',
    // MOBILE_FRAMEWORK='Movil FrameWork'
}   

@Entity('tecnologias')
export class Tecnologias{
    
    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:'varchar'})
    name:string;

    @Column({type:'varchar'})
    description:string

    @Column({type:'enum', enum:typeTechnology})
    type:typeTechnology

    @ManyToOne(()=>Catalogo,(cat)=>cat.tecnologias,{onDelete:'CASCADE'})
    @JoinColumn({name:'catalogo_id'})
    catalogo:Catalogo

}