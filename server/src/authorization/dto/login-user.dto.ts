import { IsEmail, IsNotEmpty, ValidateIf } from 'class-validator'

export class LoginUserDto {
  @ValidateIf((o) => o.email === undefined)
  @IsNotEmpty()
  username: string
  @ValidateIf((o) => o.username === undefined)
  @IsEmail()
  @IsNotEmpty()
  email: string

  @IsNotEmpty()
  password: string
}
