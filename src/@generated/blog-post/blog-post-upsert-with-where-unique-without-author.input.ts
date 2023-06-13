import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlogPostWhereUniqueInput } from './blog-post-where-unique.input';
import { Type } from 'class-transformer';
import { BlogPostUpdateWithoutAuthorInput } from './blog-post-update-without-author.input';
import { BlogPostCreateWithoutAuthorInput } from './blog-post-create-without-author.input';

@InputType()
export class BlogPostUpsertWithWhereUniqueWithoutAuthorInput {

    @Field(() => BlogPostWhereUniqueInput, {nullable:false})
    @Type(() => BlogPostWhereUniqueInput)
    where!: BlogPostWhereUniqueInput;

    @Field(() => BlogPostUpdateWithoutAuthorInput, {nullable:false})
    @Type(() => BlogPostUpdateWithoutAuthorInput)
    update!: BlogPostUpdateWithoutAuthorInput;

    @Field(() => BlogPostCreateWithoutAuthorInput, {nullable:false})
    @Type(() => BlogPostCreateWithoutAuthorInput)
    create!: BlogPostCreateWithoutAuthorInput;
}
