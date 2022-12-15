import { Module } from '@nestjs/common'
import { authorizationController } from './authorization.controller'
import { AuthorizationService } from './authorization.service'
@Module({
  controllers: [authorizationController],
  providers: [AuthorizationService],
})
export class authorizationModule {}
