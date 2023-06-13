import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateOneWithoutCommentsNestedInput } from '../user/user-update-one-without-comments-nested.input';

@InputType()
export class CommentUpdateWithoutPostInput {

    @Field(() => String, {nullable:true})
    content?: string;

    @Field(() => UserUpdateOneWithoutCommentsNestedInput, {nullable:true})
    author?: UserUpdateOneWithoutCommentsNestedInput;
}
