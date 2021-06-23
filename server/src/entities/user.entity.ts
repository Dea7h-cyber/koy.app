import {
  BaseEntity,
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { DateTime } from 'luxon'

@Entity('users')
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column('varchar', { length: 20 })
  username: string

  @Column('varchar', { length: 128 })
  email: string

  @Column('varchar', { length: 64 })
  password: string

  @Column('timestamp with time zone')
  created_at: string

  @Column('timestamp with time zone')
  updated_at: string

  @BeforeInsert()
  beforeInsert() {
    this.created_at = DateTime.local().toUTC().toISO()
    this.updated_at = DateTime.local().toUTC().toISO()
  }

  @BeforeUpdate()
  beforeUpdate() {
    this.updated_at = DateTime.local().toUTC().toISO()
  }
}
