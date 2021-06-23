import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'
import { UsersService } from './users.service'
import { User } from './entities/user.entity'
import {
  CreateUserInput,
  UpdateUserInput,
  GetUserArgs,
  GetUsersArgs,
} from './dto'

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => User, { nullable: true })
  async getUser(@Args() args: GetUserArgs): Promise<User> {
    return this.usersService.findOne(args)
  }

  @Query(() => [User])
  async getUsers(@Args() args: GetUsersArgs): Promise<User[]> {
    return this.usersService.getMany(args)
  }

  @Mutation(() => User)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.usersService.create(createUserInput)
  }

  @Mutation(() => User)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.usersService.update(updateUserInput.id, updateUserInput)
  }

  @Mutation(() => User)
  removeUser(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.remove(id)
  }
}
