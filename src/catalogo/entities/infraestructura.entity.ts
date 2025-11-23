import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Catalogo } from "./catalogo.entity";

@Entity('infraestructura')
export class  Infraestructura{
    
    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:'varchar'})
    name:string;

    @Column({type:'varchar'})
    description:string;

    @ManyToOne(()=>Catalogo,(cat)=>cat.infraestructura,{onDelete:'CASCADE'})
    @JoinColumn({name:'catalogo_id'})
    catalogo:Catalogo
}