import { ArgsType, Field } from '@nestjs/graphql'
import { IsInt, IsNotEmpty } from 'class-validator'

@ArgsType()
export class GetUserArgs {
  @Field()
  @IsNotEmpty()
  id: string
}

@ArgsType()
export class GetUsersArgs {
  @Field({ nullable: true })
  @IsInt()
  page: number = 1
}
