import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Comment } from '../comment/comment.model';
import { BlogPostCount } from './blog-post-count.output';

@ObjectType()
export class BlogPost {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    content!: string | null;

    @Field(() => Boolean, {nullable:false})
    published!: boolean;

    @Field(() => Int, {nullable:true})
    authorId!: number | null;

    @Field(() => User, {nullable:true})
    author?: User | null;

    @Field(() => [Comment], {nullable:true})
    comments?: Array<Comment>;

    @Field(() => BlogPostCount, {nullable:false})
    _count?: BlogPostCount;
}
