import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm'
import { join } from 'path'

@Injectable()
export class DatabaseFactory implements TypeOrmOptionsFactory {
  constructor(private readonly config: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: this.config.get('PG_HOST'),
      port: Number(this.config.get('PG_PORT')),
      username: this.config.get('PG_USER'),
      password: this.config.get('PG_PASS'),
      database: this.config.get('PG_DB'),
      entities: [join(__dirname, '../entities/*.entity.{ts,js}')],
      migrations: [join(__dirname, '../migrations/*.{ts,js}')],
      synchronize: this.config.get('NODE_ENV') === 'dev',
      migrationsRun: this.config.get('NODE_ENV') !== 'dev',
    }
  }
}
