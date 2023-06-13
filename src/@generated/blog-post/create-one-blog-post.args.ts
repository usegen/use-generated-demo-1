import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BlogPostCreateInput } from './blog-post-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneBlogPostArgs {

    @Field(() => BlogPostCreateInput, {nullable:false})
    @Type(() => BlogPostCreateInput)
    data!: BlogPostCreateInput;
}
