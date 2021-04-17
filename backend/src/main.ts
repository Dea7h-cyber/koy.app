import { NestFactory } from '@nestjs/core'
import { RootModule } from './root/root.module'

async function bootstrap() {
  const app = await NestFactory.create(RootModule)
  await app.listen(5000)

  console.log(`\nServer running at ${await app.getUrl()}\n`)
}
bootstrap()
