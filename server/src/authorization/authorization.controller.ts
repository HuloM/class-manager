import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common'
import { SignupUserDto } from './dto/signup-user.dto'
import { AuthorizationService } from './authorization.service'
import { LoginUserDto } from './dto/login-user.dto'

@Controller('auth')
export class authorizationController {
  constructor(private authService: AuthorizationService) {}
  @Post('/signup')
  async signup(@Body() signupUserDto: SignupUserDto) {
    const newUser = await this.authService.signup(signupUserDto)

    // @ts-ignore
    if (newUser.Status === 400) {
      // @ts-ignore
      throw new HttpException(newUser.message, HttpStatus.BAD_REQUEST)
    }
    return newUser
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
