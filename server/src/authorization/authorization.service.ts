import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { User, UserDocument } from './schemas/user.schema'
import { SignupUserDto } from './dto/signup-user.dto'

@Injectable()
export class AuthorizationService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async signup(signupUserDto: SignupUserDto): Promise<User> {
    const userCreated = new this.userModel(signupUserDto)
    return userCreated.save()
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec()
  }
}
