import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Catalogo } from "./catalogo.entity";

@Entity('informacion_general')
export class InformacionGeneral{

    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:'varchar'})
    title:string;

    @Column({type:'longtext',nullable:true})
    content:string;

    @ManyToOne(()=>Catalogo,(cat)=>cat.informacionGeneral,{onDelete:'CASCADE'})
    @JoinColumn({name:'catalogo_id'})
    catalogo:Catalogo;
}