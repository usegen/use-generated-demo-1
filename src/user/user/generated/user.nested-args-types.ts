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
class CommentArgsForUser {
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
class BlogPostArgsForUser {
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
export class CommentNestedArgs0ForUser {
  @Field(() => CommentArgsForUser, {nullable:true})
  args: CommentArgsForUser
}

@InputType()
export class BlogPostNestedArgs0ForUser {
  @Field(() => BlogPostArgsForUser, {nullable:true})
  args: BlogPostArgsForUser
}

@InputType()
export class UserNestedArgsStartPoint {
  @Field(() => CommentNestedArgs0ForUser, {nullable:true})
  comments: CommentNestedArgs0ForUser
  @Field(() => BlogPostNestedArgs0ForUser, {nullable:true})
  posts: BlogPostNestedArgs0ForUser
}
