import { Logger, Module, OnModuleInit } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import { TypeOrmModule } from '@nestjs/typeorm'

import { DatabaseFactory, ConfigFactory } from '@/factories'
import { UsersModule } from './users/users.module'

@Module({
  imports: [
    ConfigModule.forRoot(ConfigFactory),
    GraphQLModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        cors: { origin: config.get('origin') },
        debug: config.get('NODE_ENV') === 'dev',
        playground: config.get('NODE_ENV') === 'dev',
        autoSchemaFile: true,
      }),
    }),
    TypeOrmModule.forRootAsync({ useClass: DatabaseFactory }),
    UsersModule,
  ],
})
export class RootModule implements OnModuleInit {
  private readonly logger: Logger = new Logger(`RootModule`)

  constructor() {}

  onModuleInit() {
    this.logger.debug(`Do something on app start...`)
  }
}
