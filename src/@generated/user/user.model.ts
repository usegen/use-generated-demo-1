import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { UserRole } from '../prisma/user-role.enum';
import { Comment } from '../comment/comment.model';
import { BlogPost } from '../blog-post/blog-post.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    passwordHash!: string;

    @Field(() => String, {nullable:true})
    age!: string | null;

    @Field(() => String, {nullable:true})
    resetToken!: string | null;

    @Field(() => [UserRole], {nullable:true})
    roles!: Array<keyof typeof UserRole>;

    @Field(() => [Comment], {nullable:true})
    comments?: Array<Comment>;

    @Field(() => [BlogPost], {nullable:true})
    posts?: Array<BlogPost>;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
