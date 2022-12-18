import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { authorizationController } from './authorization.controller'
import { AuthorizationService } from './authorization.service'
import { User, UserSchema } from './schemas/user.schema'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [authorizationController],
  providers: [AuthorizationService],
})
export class authorizationModule {}
