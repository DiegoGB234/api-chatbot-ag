import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Catalogo } from "./catalogo.entity";

@Entity('actividades_academicas')
export class ActividadesAcademicas{
    @PrimaryGeneratedColumn()
    id:number;

    // @Column({ name: 'date', type: 'timestamp', nullable: true })
    // date: Date;
    
    // @Column({type:'varchar'})
    // period:string

    @Column({type:'varchar'})
    name:string

    @ManyToOne(()=>Catalogo,(cat)=>cat.actividadesAcademicas,{onDelete:'CASCADE'})
    @JoinColumn({name:'catalogo_id'})
    catalogo:Catalogo
}