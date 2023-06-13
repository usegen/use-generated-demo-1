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
class CommentArgsForComment {
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
class BlogPostArgsForComment {
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
export class CommentNestedArgs0ForComment {
  @Field(() => CommentArgsForComment, {nullable:true})
  args: CommentArgsForComment
}

@InputType()
export class BlogPostNestedArgs0ForComment {
  @Field(() => BlogPostArgsForComment, {nullable:true})
  args: BlogPostArgsForComment
}

@InputType()
export class UserNestedArgs0ForComment {
  @Field(() => CommentNestedArgs0ForComment, {nullable:true})
  comments: CommentNestedArgs0ForComment
  @Field(() => BlogPostNestedArgs0ForComment, {nullable:true})
  posts: BlogPostNestedArgs0ForComment
}

@InputType()
export class CommentNestedArgs1ForComment {
  @Field(() => CommentArgsForComment, {nullable:true})
  args: CommentArgsForComment
}

@InputType()
export class BlogPostNestedArgs1ForComment {
  @Field(() => CommentNestedArgs1ForComment, {nullable:true})
  comments: CommentNestedArgs1ForComment
}

@InputType()
export class CommentNestedArgsStartPoint {
  @Field(() => UserNestedArgs0ForComment, {nullable:true})
  author: UserNestedArgs0ForComment
  @Field(() => BlogPostNestedArgs1ForComment, {nullable:true})
  post: BlogPostNestedArgs1ForComment
}
