import { ConfigModuleOptions } from '@nestjs/config'
import { join } from 'path'

export const ConfigFactory: ConfigModuleOptions = {
  isGlobal: true,
  envFilePath: join(__dirname, `../../.env.${process.env.ENV}`),
}
