import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BlogPostWhereInput } from './blog-post-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyBlogPostArgs {

    @Field(() => BlogPostWhereInput, {nullable:true})
    @Type(() => BlogPostWhereInput)
    where?: BlogPostWhereInput;
}
