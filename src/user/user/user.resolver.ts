import { extend, Resolver } from '@nestjs/graphql';
import  { UserGeneratedResolver} from './generated/user.generated-resolver' 

@Resolver()
export class UserResolver extends UserGeneratedResolver {}
