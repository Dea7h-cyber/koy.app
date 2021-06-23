import { Injectable } from '@nestjs/common'
import {
  GetUserArgs,
  GetUsersArgs,
  CreateUserInput,
  UpdateUserInput,
} from './dto'
import { User } from './entities/user.entity'

@Injectable()
export class UsersService {
  async findOne({ id }: GetUserArgs): Promise<User> {
    return {
      id: 'woo',
      username: 'me',
      email: 'me@a.b',
      password: 'wo',
    }
  }

  async getMany({ page }: GetUsersArgs): Promise<User[]> {
    return [
      {
        id: 'woo',
        username: 'me',
        email: 'me@a.b',
        password: 'wo',
      },
    ]
  }

  create(createUserInput: CreateUserInput) {
    return 'This action adds a new user'
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`
  }

  remove(id: number) {
    return `This action removes a #${id} user`
  }
}
