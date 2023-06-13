import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlogPostCreateWithoutCommentsInput } from './blog-post-create-without-comments.input';
import { Type } from 'class-transformer';
import { BlogPostCreateOrConnectWithoutCommentsInput } from './blog-post-create-or-connect-without-comments.input';
import { BlogPostUpsertWithoutCommentsInput } from './blog-post-upsert-without-comments.input';
import { BlogPostWhereUniqueInput } from './blog-post-where-unique.input';
import { BlogPostUpdateWithoutCommentsInput } from './blog-post-update-without-comments.input';

@InputType()
export class BlogPostUpdateOneRequiredWithoutCommentsNestedInput {

    @Field(() => BlogPostCreateWithoutCommentsInput, {nullable:true})
    @Type(() => BlogPostCreateWithoutCommentsInput)
    create?: BlogPostCreateWithoutCommentsInput;

    @Field(() => BlogPostCreateOrConnectWithoutCommentsInput, {nullable:true})
    @Type(() => BlogPostCreateOrConnectWithoutCommentsInput)
    connectOrCreate?: BlogPostCreateOrConnectWithoutCommentsInput;

    @Field(() => BlogPostUpsertWithoutCommentsInput, {nullable:true})
    @Type(() => BlogPostUpsertWithoutCommentsInput)
    upsert?: BlogPostUpsertWithoutCommentsInput;

    @Field(() => BlogPostWhereUniqueInput, {nullable:true})
    @Type(() => BlogPostWhereUniqueInput)
    connect?: BlogPostWhereUniqueInput;

    @Field(() => BlogPostUpdateWithoutCommentsInput, {nullable:true})
    @Type(() => BlogPostUpdateWithoutCommentsInput)
    update?: BlogPostUpdateWithoutCommentsInput;
}
