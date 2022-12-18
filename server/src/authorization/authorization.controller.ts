import { Controller, Post, Body } from '@nestjs/common'
import { SignupUserDto } from './dto/signup-user.dto'
import { AuthorizationService } from './authorization.service'

@Controller('auth')
export class authorizationController {
  constructor(private authService: AuthorizationService) {}
  @Post('/signup')
  async signup(@Body() signupUserDto: SignupUserDto) {
    if (signupUserDto.password === signupUserDto.confirmPassword) {
      await this.authService.signup(signupUserDto)

      console.log(await this.authService.findAll())
      return { message: 'Signup successful' }
    }
    return { message: 'the passwords do not match' }
  }
  @Post('/login')
  login(): string {
    return 'This action signs a user in'
  }
}
