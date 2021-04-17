import { ArgsType, Field } from '@nestjs/graphql'
import { IsInt, IsNotEmpty, IsOptional } from 'class-validator'

@ArgsType()
export class GetUserArgs {
  @Field()
  @IsNotEmpty()
  id: string
}

@ArgsType()
export class GetUsersArgs {
  @Field()
  @IsInt()
  @IsOptional()
  page: number = 1
}
