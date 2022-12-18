import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { User, UserDocument } from './schemas/user.schema'
import { SignupUserDto } from './dto/signup-user.dto'
import { LoginUserDto } from './dto/login-user.dto'
import { hash, compare } from 'bcrypt'

@Injectable()
export class AuthorizationService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async signup(signupUserDto: SignupUserDto): Promise<User> {
    signupUserDto.password = await hash(signupUserDto.password, 12)
    const userCreated = new this.userModel(signupUserDto)
    return userCreated.save()
  }

  async login(loginUserDto: LoginUserDto): Promise<User> {
    let user

    if (loginUserDto.username)
      user = await this.userModel.findOne({ username: loginUserDto.username })
    else user = await this.userModel.findOne({ email: loginUserDto.email })
    if (await compare(loginUserDto.password, user.password)) return user
    return null
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec()
  }
}
