import { IsEmail, IsNotEmpty } from 'class-validator'
import { IsEqualTo } from '../decorators/isEqualTo.decorator'

export class SignupUserDto {
  @IsNotEmpty()
  name: string

  @IsNotEmpty()
  age: number

  @IsNotEmpty()
  username: string

  @IsEmail()
  email: string

  @IsNotEmpty()
  password: string

  @IsNotEmpty()
  @IsEqualTo('password')
  confirmPassword: string
}
