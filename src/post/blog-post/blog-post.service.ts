import { Injectable } from '@nestjs/common';
import { BlogPostGeneratedService } from './generated/blog-post.generated-service';

@Injectable()
export class BlogPostService extends BlogPostGeneratedService {
  // this overrides the allBlogPost from the  BlogPostGeneratedService and hardcodes the property take to 2
  // that means allBlogPost will only return first 2 elements
  // allBlogPost (take, skip, orderBy, where){
  //   return this.prisma.blog-post.findMany({
  //     take:2,
  //     skip,
  //     orderBy,
  //     where
  //   });
  // }
}
