import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutCommentsInput } from '../user/user-create-nested-one-without-comments.input';

@InputType()
export class CommentCreateWithoutPostInput {

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => UserCreateNestedOneWithoutCommentsInput, {nullable:true})
    author?: UserCreateNestedOneWithoutCommentsInput;
}
