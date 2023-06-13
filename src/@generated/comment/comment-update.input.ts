import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateOneWithoutCommentsNestedInput } from '../user/user-update-one-without-comments-nested.input';
import { BlogPostUpdateOneRequiredWithoutCommentsNestedInput } from '../blog-post/blog-post-update-one-required-without-comments-nested.input';

@InputType()
export class CommentUpdateInput {

    @Field(() => String, {nullable:true})
    content?: string;

    @Field(() => UserUpdateOneWithoutCommentsNestedInput, {nullable:true})
    author?: UserUpdateOneWithoutCommentsNestedInput;

    @Field(() => BlogPostUpdateOneRequiredWithoutCommentsNestedInput, {nullable:true})
    post?: BlogPostUpdateOneRequiredWithoutCommentsNestedInput;
}
