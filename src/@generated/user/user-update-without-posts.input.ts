import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRole } from '../prisma/user-role.enum';
import { CommentUpdateManyWithoutAuthorNestedInput } from '../comment/comment-update-many-without-author-nested.input';

@InputType()
export class UserUpdateWithoutPostsInput {

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

    @Field(() => CommentUpdateManyWithoutAuthorNestedInput, {nullable:true})
    comments?: CommentUpdateManyWithoutAuthorNestedInput;
}
