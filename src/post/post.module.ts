import { Module } from '@nestjs/common';
  import { PrismaModule } from 'src/prisma/prisma.module';
import { BlogPostResolver } from './blog-post/blog-post.resolver';
import { BlogPostService } from './blog-post/blog-post.service';
import { CommentResolver } from './comment/comment.resolver';
import { CommentService } from './comment/comment.service';

@Module({imports:[PrismaModule], providers: [BlogPostResolver, BlogPostService, CommentResolver, CommentService]})
export class PostModule {}
