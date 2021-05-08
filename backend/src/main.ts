import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import { RootModule } from './root/root.module'

async function bootstrap() {
  const app = await NestFactory.create(RootModule)
  const config = app.get(ConfigService)
  app.enableCors({ origin: config.get('origin'), credentials: true })
  app.useLogger(
    config.get('ENV') !== 'prod' ? ['debug', 'error', 'log', 'verbose', 'warn'] : ['error', 'warn'],
  )

  await app.listen(config.get('PORT') ?? 5000)

  console.log(`\n- SERVER STARTED AT ${await app.getUrl()} -\n`)
}
bootstrap()
