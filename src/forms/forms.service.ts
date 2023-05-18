import { Injectable, NotFoundException } from '@nestjs/common';
import { FormEntity } from './entity/forms.entity';
import { FormsInputType } from './types/forms.input.type';

import { JwtService } from '@nestjs/jwt';
import { ItemsEntity } from 'src/items/entity/items.entity';
@Injectable()
export class FormsService {
  constructor(private jwtService: JwtService) {}
  async forms() {
    return await FormEntity.find();
  }


  async createForm(input: FormsInputType) {
    const { title, description } = input;
    const form = await FormEntity.findOneBy({ title, description });
    if (form) {
      const payload = {
        id: form.id,
        name: form.title,
      };
      const result = this.jwtService.sign(payload);
      return { result };
    }
    else{
      const data = new FormEntity();
      data.title = title;
      data.description = description;
      await data.save();
      const form = await FormEntity.findOneBy({ title, description });

      const payload = {
        id: form.id,
        name: form.title,
      };

      const result = this.jwtService.sign(payload);
      return { result };
    }   
  }

  // async deleteForm(id: number) {
  //   const form = await FormEntity.findOneBy({id});
  //   if (!form) {
  //     throw new NotFoundException(`Form with ID ${id} not found`);
  //   }
  //   await FormEntity.remove(form);
  //   return `Form with ID ${id} deleted successfully`;
  // }  

  // async removeAllListeners(formId: number){
  //   const data = await ItemEntity.find({formId})
  // }
}
