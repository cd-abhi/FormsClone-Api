import { FormEntity } from "src/forms/entity/forms.entity";
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("items")
export class ItemsEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  question: string;

  @Column()
  description: string;

  // @Column()
  // questionType: string;

  @Column()
  formId: number;

  @ManyToOne(() => FormEntity, (form) => form.items, { eager: false })
  form: FormEntity;
}
