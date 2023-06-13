import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { BlogPost } from '../blog-post/blog-post.model';

@ObjectType()
export class Comment {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Int, {nullable:true})
    authorId!: number | null;

    @Field(() => Int, {nullable:false})
    postId!: number;

    @Field(() => User, {nullable:true})
    author?: User | null;

    @Field(() => BlogPost, {nullable:false})
    post?: BlogPost;
}
