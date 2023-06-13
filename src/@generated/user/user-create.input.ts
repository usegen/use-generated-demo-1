import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRole } from '../prisma/user-role.enum';
import { CommentCreateNestedManyWithoutAuthorInput } from '../comment/comment-create-nested-many-without-author.input';
import { BlogPostCreateNestedManyWithoutAuthorInput } from '../blog-post/blog-post-create-nested-many-without-author.input';

@InputType()
export class UserCreateInput {

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    passwordHash!: string;

    @Field(() => String, {nullable:true})
    age?: string;

    @Field(() => String, {nullable:true})
    resetToken?: string;

    @Field(() => [UserRole], {nullable:true})
    roles?: Array<keyof typeof UserRole>;

    @Field(() => CommentCreateNestedManyWithoutAuthorInput, {nullable:true})
    comments?: CommentCreateNestedManyWithoutAuthorInput;

    @Field(() => BlogPostCreateNestedManyWithoutAuthorInput, {nullable:true})
    posts?: BlogPostCreateNestedManyWithoutAuthorInput;
}
