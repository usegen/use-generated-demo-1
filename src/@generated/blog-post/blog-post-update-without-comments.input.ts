import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateOneWithoutPostsNestedInput } from '../user/user-update-one-without-posts-nested.input';

@InputType()
export class BlogPostUpdateWithoutCommentsInput {

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    content?: string;

    @Field(() => Boolean, {nullable:true})
    published?: boolean;

    @Field(() => UserUpdateOneWithoutPostsNestedInput, {nullable:true})
    author?: UserUpdateOneWithoutPostsNestedInput;
}
