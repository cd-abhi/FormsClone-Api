import { ArgsType, Field, InputType } from '@nestjs/graphql';

@InputType()
@ArgsType()
export class ItemsInputType {
  @Field()
  question: string;

  @Field()
  description: string;

  // @Field()
  // questionType: string;
}
