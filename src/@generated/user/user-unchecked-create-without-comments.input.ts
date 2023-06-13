import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserRole } from '../prisma/user-role.enum';
import { BlogPostUncheckedCreateNestedManyWithoutAuthorInput } from '../blog-post/blog-post-unchecked-create-nested-many-without-author.input';

@InputType()
export class UserUncheckedCreateWithoutCommentsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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

    @Field(() => BlogPostUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    posts?: BlogPostUncheckedCreateNestedManyWithoutAuthorInput;
}
