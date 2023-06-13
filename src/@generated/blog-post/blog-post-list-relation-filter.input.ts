import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlogPostWhereInput } from './blog-post-where.input';

@InputType()
export class BlogPostListRelationFilter {

    @Field(() => BlogPostWhereInput, {nullable:true})
    every?: BlogPostWhereInput;

    @Field(() => BlogPostWhereInput, {nullable:true})
    some?: BlogPostWhereInput;

    @Field(() => BlogPostWhereInput, {nullable:true})
    none?: BlogPostWhereInput;
}
