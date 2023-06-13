import { extend, Resolver } from '@nestjs/graphql';
import  { BlogPostGeneratedResolver} from './generated/blog-post.generated-resolver' 

@Resolver()
export class BlogPostResolver extends BlogPostGeneratedResolver {}
