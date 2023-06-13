import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CommentUncheckedCreateNestedManyWithoutPostInput } from '../comment/comment-unchecked-create-nested-many-without-post.input';

@InputType()
export class BlogPostUncheckedCreateWithoutAuthorInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    content?: string;

    @Field(() => Boolean, {nullable:false})
    published!: boolean;

    @Field(() => CommentUncheckedCreateNestedManyWithoutPostInput, {nullable:true})
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput;
}
