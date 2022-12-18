import { Module } from '@nestjs/common'
import { authorizationModule } from './authorization/authorization.module'
import { MongooseModule } from '@nestjs/mongoose'
import { ConfigModule } from '@nestjs/config'

const envFilePath = `${__dirname}/common/envs/.env`
@Module({
  // imports: [MongooseModule.forRoot(process.env.MONGODB_CONN) , authorizationModule],
  imports: [
    ConfigModule.forRoot({ envFilePath, isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGODB_CONN),
    authorizationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
