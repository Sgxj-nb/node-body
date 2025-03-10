import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
@Controller('user')
export class UserController {

  constructor(private readonly userServer: UserService) {

  }

  @Get()
  getHello() {
    return this.userServer.getHello();
  }
}