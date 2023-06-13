import { extend, Resolver } from '@nestjs/graphql';
import  { CommentGeneratedResolver} from './generated/comment.generated-resolver' 

@Resolver()
export class CommentResolver extends CommentGeneratedResolver {}
