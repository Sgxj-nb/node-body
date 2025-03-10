/** 用户服务层 */
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getHello(): string {
    return '欢迎管理员';
  }
}