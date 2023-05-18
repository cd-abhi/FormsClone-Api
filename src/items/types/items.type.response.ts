import { Field, ObjectType } from "@nestjs/graphql";
import { ItemsType } from "./items.type";

@ObjectType()
export class ItemsAddedResponse {
  @Field()
  result: ItemsType[];
}
