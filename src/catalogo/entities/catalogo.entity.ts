import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { InformacionGeneral } from "./informacion-general.entity";
import { ActividadesAcademicas } from "./actividades-academicas.entity";
import { PreguntasFrecuentes } from "./preguntas-frecuentes.entity";
import { Infraestructura } from "./infraestructura.entity";
import { Tecnologias } from "./tecnologias.entity";



@Entity('catalogo')
export class Catalogo {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:'varchar'})
    name:string;

    @Column({type:'longtext'})
    description:string;
    // relaciones

    @OneToMany(()=>InformacionGeneral,(infG)=>infG.catalogo,{cascade:true})
    informacionGeneral:InformacionGeneral[];

    @OneToMany(()=>ActividadesAcademicas,(actAca)=> actAca.catalogo,{cascade:true})
    actividadesAcademicas:ActividadesAcademicas[];

    @OneToMany(()=>PreguntasFrecuentes,(preFre)=>preFre.catalogo,{cascade:true})
    preguntasFrecuentes:PreguntasFrecuentes[];

    @OneToMany(()=>Infraestructura,(infraes)=>infraes.catalogo,{cascade:true})
    infraestructura:Infraestructura[];

    @OneToMany(()=>Tecnologias,(tec)=>tec.catalogo)
    tecnologias:Tecnologias[];
}   
