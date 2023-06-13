import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CommentUncheckedUpdateManyWithoutPostNestedInput } from '../comment/comment-unchecked-update-many-without-post-nested.input';

@InputType()
export class BlogPostUncheckedUpdateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    content?: string;

    @Field(() => Boolean, {nullable:true})
    published?: boolean;

    @Field(() => Int, {nullable:true})
    authorId?: number;

    @Field(() => CommentUncheckedUpdateManyWithoutPostNestedInput, {nullable:true})
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput;
}
