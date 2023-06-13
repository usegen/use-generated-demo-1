import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlogPostCreateWithoutCommentsInput } from './blog-post-create-without-comments.input';
import { Type } from 'class-transformer';
import { BlogPostCreateOrConnectWithoutCommentsInput } from './blog-post-create-or-connect-without-comments.input';
import { BlogPostWhereUniqueInput } from './blog-post-where-unique.input';

@InputType()
export class BlogPostCreateNestedOneWithoutCommentsInput {

    @Field(() => BlogPostCreateWithoutCommentsInput, {nullable:true})
    @Type(() => BlogPostCreateWithoutCommentsInput)
    create?: BlogPostCreateWithoutCommentsInput;

    @Field(() => BlogPostCreateOrConnectWithoutCommentsInput, {nullable:true})
    @Type(() => BlogPostCreateOrConnectWithoutCommentsInput)
    connectOrCreate?: BlogPostCreateOrConnectWithoutCommentsInput;

    @Field(() => BlogPostWhereUniqueInput, {nullable:true})
    @Type(() => BlogPostWhereUniqueInput)
    connect?: BlogPostWhereUniqueInput;
}
