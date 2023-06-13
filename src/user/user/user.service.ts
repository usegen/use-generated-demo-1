import { Injectable } from '@nestjs/common';
import { UserGeneratedService } from './generated/user.generated-service';

@Injectable()
export class UserService extends UserGeneratedService {
  // this overrides the allUser from the  UserGeneratedService and hardcodes the property take to 2
  // that means allUser will only return first 2 elements
  // allUser (take, skip, orderBy, where){
  //   return this.prisma.user.findMany({
  //     take:2,
  //     skip,
  //     orderBy,
  //     where
  //   });
  // }
}
