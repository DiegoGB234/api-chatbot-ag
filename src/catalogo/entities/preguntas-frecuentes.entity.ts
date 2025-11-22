import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Catalogo } from "./catalogo.entity";

@Entity('preguntas_frecuentes')
export class PreguntasFrecuentes{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:'varchar'})
    question:string

    @Column({type:'varchar'})
    answer:string;

    @ManyToOne(()=>Catalogo,(cat)=>cat.preguntasFrecuentes,{onDelete:'CASCADE'})
    @JoinColumn({name:'catalogo_id'})
    catalogo:Catalogo
}