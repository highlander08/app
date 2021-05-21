import { DepartmentsEmployeesEntity } from 'src/departmentsEmployees/database/departmentsEmployees.entity';
import { MovesEntity } from 'src/moves/database/moves.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class DepartmentsEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  created_at: string;

  @OneToMany(
    () => DepartmentsEmployeesEntity,
    (DepartmentsEmployeesEntity) => DepartmentsEmployeesEntity.departmentId,
  )
  DepartmentsEmployeesEntity: DepartmentsEmployeesEntity;

  @OneToMany(() => MovesEntity, (MovesEntity) => MovesEntity.employeesId)
  MovesEntity: MovesEntity;
}
