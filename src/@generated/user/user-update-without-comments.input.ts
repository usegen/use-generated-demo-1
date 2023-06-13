import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRole } from '../prisma/user-role.enum';
import { BlogPostUpdateManyWithoutAuthorNestedInput } from '../blog-post/blog-post-update-many-without-author-nested.input';

@InputType()
export class UserUpdateWithoutCommentsInput {

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => String, {nullable:true})
    passwordHash?: string;

    @Field(() => String, {nullable:true})
    age?: string;

    @Field(() => String, {nullable:true})
    resetToken?: string;

    @Field(() => [UserRole], {nullable:true})
    roles?: Array<keyof typeof UserRole>;

    @Field(() => BlogPostUpdateManyWithoutAuthorNestedInput, {nullable:true})
    posts?: BlogPostUpdateManyWithoutAuthorNestedInput;
}
