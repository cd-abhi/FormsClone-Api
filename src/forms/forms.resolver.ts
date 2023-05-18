import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { FormsType } from './types/forms.type';
import { FormsInputType } from './types/forms.input.type';
import { FormsService } from './forms.service';
import { StringResponse } from './types/forms.response';

@Resolver(() => FormsType)
export class FormsResolver {
  constructor(private formsService: FormsService) {}

  @Query(() => [FormsType])
  forms() {
    return this.formsService.forms();
  }


  // @Mutation(() => FormsResponseType)
  // async deleteForm(@Args('id') id: number){
  //   return this.formsService.deleteForm(id);
  // }

  @Mutation(() => StringResponse)
  createForm(@Args('input') input: FormsInputType) {
    return this.formsService.createForm(input);
  }
}
