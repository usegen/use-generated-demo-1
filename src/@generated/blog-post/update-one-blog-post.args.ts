import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BlogPostUpdateInput } from './blog-post-update.input';
import { Type } from 'class-transformer';
import { BlogPostWhereUniqueInput } from './blog-post-where-unique.input';

@ArgsType()
export class UpdateOneBlogPostArgs {

    @Field(() => BlogPostUpdateInput, {nullable:false})
    @Type(() => BlogPostUpdateInput)
    data!: BlogPostUpdateInput;

    @Field(() => BlogPostWhereUniqueInput, {nullable:false})
    @Type(() => BlogPostWhereUniqueInput)
    where!: BlogPostWhereUniqueInput;
}
