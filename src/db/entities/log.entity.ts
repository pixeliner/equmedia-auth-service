import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class LogEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  entity_name: string;

  @Column()
  event_name: string;

  @Column()
  record_id: string;

  @Column()
  record_value: string;

  @Column()
  timestamp: Date;
}
