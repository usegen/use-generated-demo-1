import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutCommentsInput } from '../user/user-create-nested-one-without-comments.input';
import { BlogPostCreateNestedOneWithoutCommentsInput } from '../blog-post/blog-post-create-nested-one-without-comments.input';

@InputType()
export class CommentCreateInput {

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => UserCreateNestedOneWithoutCommentsInput, {nullable:true})
    author?: UserCreateNestedOneWithoutCommentsInput;

    @Field(() => BlogPostCreateNestedOneWithoutCommentsInput, {nullable:false})
    post!: BlogPostCreateNestedOneWithoutCommentsInput;
}
