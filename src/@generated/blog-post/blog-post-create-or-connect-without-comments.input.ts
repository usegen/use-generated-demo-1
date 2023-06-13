import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlogPostWhereUniqueInput } from './blog-post-where-unique.input';
import { Type } from 'class-transformer';
import { BlogPostCreateWithoutCommentsInput } from './blog-post-create-without-comments.input';

@InputType()
export class BlogPostCreateOrConnectWithoutCommentsInput {

    @Field(() => BlogPostWhereUniqueInput, {nullable:false})
    @Type(() => BlogPostWhereUniqueInput)
    where!: BlogPostWhereUniqueInput;

    @Field(() => BlogPostCreateWithoutCommentsInput, {nullable:false})
    @Type(() => BlogPostCreateWithoutCommentsInput)
    create!: BlogPostCreateWithoutCommentsInput;
}
