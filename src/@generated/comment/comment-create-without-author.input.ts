import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlogPostCreateNestedOneWithoutCommentsInput } from '../blog-post/blog-post-create-nested-one-without-comments.input';

@InputType()
export class CommentCreateWithoutAuthorInput {

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => BlogPostCreateNestedOneWithoutCommentsInput, {nullable:false})
    post!: BlogPostCreateNestedOneWithoutCommentsInput;
}
