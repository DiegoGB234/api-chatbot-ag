import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Catalogo } from './catalogo.entity';

export enum typeStateSchool {
    START_CLASSES = 'Inicio de clases',
    END_CLASSES = 'Fin de clases',
    HOLIDAY = 'Día festivo',
    VACATION = 'Vacaciones',
    EXAM_PERIOD = 'Periodo de exámenes',
    INSCRIPTION = 'Inscripciones',
    REINSCRIPTION = 'Reinscripciones',
    SUSPENSION = 'Suspensión de actividades',
    ADMINISTRATION = 'Actividad administrativa',
    SPECIAL_EVENT = 'Evento especial',
    LATE_RE_ENROLLMENT='Reinscripcion tardia',
    TECHAER_EVALUATION='Evalucaion Docente'
}


@Entity('calendario_escolar')
export class CalendarioEscolar {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 150 })
  title: string; // Ej: Inscripción, Reinscripción, Inicio de Cuatrimestre...

  @Column({ type:'enum', enum:typeStateSchool })
  type: typeStateSchool

  @Column({ type: 'date' })
  startDate: string;

  @Column({ type: 'date', nullable: true })
  endDate: string | null;

  @Column({ type: 'varchar', length: 20, nullable: true })
  color: string; // Para UI (opcional)

  @Column({ type: 'varchar', length: 20 })
  ciclo: string; // Ej: "2025-2026"

  @Column({ type: 'varchar', length: 30 })
  cuatrimestre: string; // "Septiembre-Diciembre", "Enero-Abril", etc.

  @ManyToOne(()=>Catalogo)
  @JoinColumn({name:'catalogo_id'})
  catalogo:Catalogo
}
