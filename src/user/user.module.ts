import { Module } from '@nestjs/common';
  import { PrismaModule } from 'src/prisma/prisma.module';
import { UserResolver } from './user/user.resolver';
import { UserService } from './user/user.service';

@Module({imports:[PrismaModule], providers: [UserResolver, UserService]})
export class UserModule {}
