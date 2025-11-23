import { CalendarioEscolarService } from "../services/calendario-escolar.service";
import { ActividadesAcademicas } from "./actividades-academicas.entity";
import { CalendarioEscolar } from "./calendario-escolar.entity";
import { Catalogo } from "./catalogo.entity";
import { InformacionGeneral } from "./informacion-general.entity";
import { Infraestructura } from "./infraestructura.entity";
import { PreguntasFrecuentes } from "./preguntas-frecuentes.entity";
import { Tecnologias } from "./tecnologias.entity";

export const CatalogoEntites=[
    Catalogo,
    ActividadesAcademicas,
    InformacionGeneral,
    Infraestructura,
    PreguntasFrecuentes,
    Tecnologias,
    CalendarioEscolar
    
]