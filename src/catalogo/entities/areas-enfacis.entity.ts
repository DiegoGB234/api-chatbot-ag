import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('areas_enfacis')
export class AreasEnfacis{
    @PrimaryGeneratedColumn()
    id:number;
    
}