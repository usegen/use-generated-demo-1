import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserRole } from '../prisma/user-role.enum';
import { BlogPostUncheckedUpdateManyWithoutAuthorNestedInput } from '../blog-post/blog-post-unchecked-update-many-without-author-nested.input';

@InputType()
export class UserUncheckedUpdateWithoutCommentsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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

    @Field(() => BlogPostUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    posts?: BlogPostUncheckedUpdateManyWithoutAuthorNestedInput;
}
