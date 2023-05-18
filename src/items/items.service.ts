import { Injectable, NotFoundException } from '@nestjs/common';
import { ItemsEntity } from './entity/items.entity';
import { ItemsInputType } from './types/items.input.type';
import { FormEntity } from 'src/forms/entity/forms.entity';
import { ID } from '@nestjs/graphql';

@Injectable()
export class ItemsService {
  async items(id: number) {
    return await ItemsEntity.findBy({ formId: id });
  }

  async addItems(form: FormEntity, input: ItemsInputType[]){
    input.map(async (tmp) => {
      const { question, description } = tmp;
      const item = new ItemsEntity();
      item.question = question;
      item.description = description;
      item.form = form;
      await item.save();
    });

    var result = `Items Inserted successfully!!`;
    return { result };
  }

  async deleteItem(id: number) {
    const item = await ItemsEntity.findOneBy({ id });
    if (!item) throw new NotFoundException('Item not Found');
    await item.remove();
    var result = `Item with id ${id} deleted`;
    return { result };
  }
}
