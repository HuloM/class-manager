import { Controller, Post, Body } from '@nestjs/common'
import { SignupUserDto } from './dto/signup-user.dto'
import { AuthorizationService } from './authorization.service'
import { LoginUserDto } from './dto/login-user.dto'

@Controller('auth')
export class authorizationController {
  constructor(private authService: AuthorizationService) {}
  @Post('/signup')
  async signup(@Body() signupUserDto: SignupUserDto) {
    if (signupUserDto.password === signupUserDto.confirmPassword) {
      await this.authService.signup(signupUserDto)

      return {
        message: 'Signup successful',
        user: {
          username: signupUserDto.username,
          email: signupUserDto.email,
        },
      }
    }
    return { message: 'the passwords do not match' }
  }
  @Post('/login')
  async login(@Body() loginUserDto: LoginUserDto) {
    const user = await this.authService.login(loginUserDto)
    if (user) {
      return { message: 'You have successfully logged in' }
    }
    return { message: 'the username or password are incorrect' }
  }
}
