import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BlogPostUpdateManyMutationInput } from './blog-post-update-many-mutation.input';
import { Type } from 'class-transformer';
import { BlogPostWhereInput } from './blog-post-where.input';

@ArgsType()
export class UpdateManyBlogPostArgs {

    @Field(() => BlogPostUpdateManyMutationInput, {nullable:false})
    @Type(() => BlogPostUpdateManyMutationInput)
    data!: BlogPostUpdateManyMutationInput;

    @Field(() => BlogPostWhereInput, {nullable:true})
    @Type(() => BlogPostWhereInput)
    where?: BlogPostWhereInput;
}
