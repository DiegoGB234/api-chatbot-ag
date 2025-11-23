import { CalendarioEscolar } from "../entities/calendario-escolar.entity";
import { ActividadesAcademicasServie } from "./actividades-academicas.service";
import { CalendarioEscolarService } from "./calendario-escolar.service";
import { CatalogoService } from "./catalogo.service";
import { InformacionGeneralService } from "./informacion-general.service";
import { Infraestructuraservice } from "./infraestructura.service";
import { PreguntasFrecuentesService } from "./preguntas-frecuentes.service";
import { TecnologiasService } from "./tecnologias.service";

export const CatalogoServices=[
    CatalogoService,
    ActividadesAcademicasServie,
    InformacionGeneralService,
    Infraestructuraservice,
    PreguntasFrecuentesService,
    TecnologiasService,
    CalendarioEscolarService
]