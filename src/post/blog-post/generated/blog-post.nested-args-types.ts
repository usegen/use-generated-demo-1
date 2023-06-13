import {  
    InputType, Field
  } from '@nestjs/graphql';
import {
  CommentOrderByWithRelationInput,
  CommentWhereInput
} from 'src/@generated/comment';
import {
  BlogPostOrderByWithRelationInput,
  BlogPostWhereInput
} from 'src/@generated/blog-post';
@InputType()
class CommentArgsForBlogPost {
  @Field(() => Number, {nullable:true})
  page: number
  @Field(() => Number, {nullable:true})
  perPage: number
  @Field(() => CommentOrderByWithRelationInput, {nullable:true})
  orderBy: CommentOrderByWithRelationInput
  @Field(() => CommentWhereInput, {nullable:true})
  where: CommentWhereInput
}

@InputType()
class BlogPostArgsForBlogPost {
  @Field(() => Number, {nullable:true})
  page: number
  @Field(() => Number, {nullable:true})
  perPage: number
  @Field(() => BlogPostOrderByWithRelationInput, {nullable:true})
  orderBy: BlogPostOrderByWithRelationInput
  @Field(() => BlogPostWhereInput, {nullable:true})
  where: BlogPostWhereInput
}

@InputType()
export class CommentNestedArgs0ForBlogPost {
  @Field(() => CommentArgsForBlogPost, {nullable:true})
  args: CommentArgsForBlogPost
}

@InputType()
export class BlogPostNestedArgs0ForBlogPost {
  @Field(() => BlogPostArgsForBlogPost, {nullable:true})
  args: BlogPostArgsForBlogPost
}

@InputType()
export class UserNestedArgs0ForBlogPost {
  @Field(() => CommentNestedArgs0ForBlogPost, {nullable:true})
  comments: CommentNestedArgs0ForBlogPost
  @Field(() => BlogPostNestedArgs0ForBlogPost, {nullable:true})
  posts: BlogPostNestedArgs0ForBlogPost
}

@InputType()
export class CommentNestedArgs1ForBlogPost {
  @Field(() => CommentArgsForBlogPost, {nullable:true})
  args: CommentArgsForBlogPost
}

@InputType()
export class BlogPostNestedArgsStartPoint {
  @Field(() => UserNestedArgs0ForBlogPost, {nullable:true})
  author: UserNestedArgs0ForBlogPost
  @Field(() => CommentNestedArgs1ForBlogPost, {nullable:true})
  comments: CommentNestedArgs1ForBlogPost
}
