import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Catalogo } from "./catalogo.entity";

@Entity('actividades_academicas')
export class ActividadesAcademicas{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:'date'})
    date:Date

    @Column({type:'varchar'})
    period:string


    @ManyToOne(()=>Catalogo,(cat)=>cat.actividadesAcademicas,{onDelete:'CASCADE'})
    @JoinColumn({name:'catalogo_id'})
    catalogo:Catalogo
}