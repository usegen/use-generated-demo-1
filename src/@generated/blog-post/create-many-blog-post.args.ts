import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BlogPostCreateManyInput } from './blog-post-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyBlogPostArgs {

    @Field(() => [BlogPostCreateManyInput], {nullable:false})
    @Type(() => BlogPostCreateManyInput)
    data!: Array<BlogPostCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
