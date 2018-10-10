import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { IsEmail } from 'class-validator'

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  @IsEmail()
  email: string
}
