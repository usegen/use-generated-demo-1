import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BlogPostWhereUniqueInput } from './blog-post-where-unique.input';
import { Type } from 'class-transformer';
import { BlogPostCreateInput } from './blog-post-create.input';
import { BlogPostUpdateInput } from './blog-post-update.input';

@ArgsType()
export class UpsertOneBlogPostArgs {

    @Field(() => BlogPostWhereUniqueInput, {nullable:false})
    @Type(() => BlogPostWhereUniqueInput)
    where!: BlogPostWhereUniqueInput;

    @Field(() => BlogPostCreateInput, {nullable:false})
    @Type(() => BlogPostCreateInput)
    create!: BlogPostCreateInput;

    @Field(() => BlogPostUpdateInput, {nullable:false})
    @Type(() => BlogPostUpdateInput)
    update!: BlogPostUpdateInput;
}
