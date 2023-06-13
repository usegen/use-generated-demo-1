import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlogPostUpdateWithoutCommentsInput } from './blog-post-update-without-comments.input';
import { Type } from 'class-transformer';
import { BlogPostCreateWithoutCommentsInput } from './blog-post-create-without-comments.input';

@InputType()
export class BlogPostUpsertWithoutCommentsInput {

    @Field(() => BlogPostUpdateWithoutCommentsInput, {nullable:false})
    @Type(() => BlogPostUpdateWithoutCommentsInput)
    update!: BlogPostUpdateWithoutCommentsInput;

    @Field(() => BlogPostCreateWithoutCommentsInput, {nullable:false})
    @Type(() => BlogPostCreateWithoutCommentsInput)
    create!: BlogPostCreateWithoutCommentsInput;
}
