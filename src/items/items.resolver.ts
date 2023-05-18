import { Args, Mutation, Query, Resolver, Float } from '@nestjs/graphql';
import { ItemsService } from './items.service';
import { ItemsType } from './types/items.type';
import { ItemsInputType } from './types/items.input.type';
import { FormEntity } from 'src/forms/entity/forms.entity';
import { GetForm } from 'src/forms/get.form.decorator';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/forms/jwt.auth.guard';
import { StringResponse } from 'src/forms/types/forms.response';

@Resolver(() => ItemsType)
@UseGuards(JwtAuthGuard)
export class ItemsResolver {
  constructor(private service: ItemsService) {}

  // Fetch ItemsH=ˍ
  @Query(() => [ItemsType])
  items(@GetForm('forms') form: FormEntity) {
    return this.service.items(form.id);
  }

  // Create Item
  @Mutation(() => StringResponse)
  addItems(
    @GetForm('form') form: FormEntity,
    @Args('input', { type: () => [ItemsInputType] }) input: ItemsInputType[],
  ) {
    return this.service.addItems(form, input);
  }

  @Mutation(() => StringResponse)
  deleteItem(@Args('id') id: number) {
    return this.service.deleteItem(id);
  }
}
