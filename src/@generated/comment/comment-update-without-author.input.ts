import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlogPostUpdateOneRequiredWithoutCommentsNestedInput } from '../blog-post/blog-post-update-one-required-without-comments-nested.input';

@InputType()
export class CommentUpdateWithoutAuthorInput {

    @Field(() => String, {nullable:true})
    content?: string;

    @Field(() => BlogPostUpdateOneRequiredWithoutCommentsNestedInput, {nullable:true})
    post?: BlogPostUpdateOneRequiredWithoutCommentsNestedInput;
}
