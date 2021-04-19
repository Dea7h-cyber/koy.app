import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import { RootModule } from './root/root.module'

async function bootstrap() {
  const app = await NestFactory.create(RootModule)
  const config = app.get(ConfigService)
  app.enableCors({ origin: config.get('origin'), credentials: true })

  await app.listen(5000)

  console.log(`\nServer running at ${await app.getUrl()}\n`)
}
bootstrap()
