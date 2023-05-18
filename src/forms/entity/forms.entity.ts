import { ItemsEntity } from "src/items/entity/items.entity";
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('forms')
export class FormEntity extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title:string
    
    @Column()
    description:string

    @OneToMany(()=>ItemsEntity,(item)=>item.form,{eager:false})
    items:ItemsEntity[]
}