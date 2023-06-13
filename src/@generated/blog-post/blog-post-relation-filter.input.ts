import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlogPostWhereInput } from './blog-post-where.input';

@InputType()
export class BlogPostRelationFilter {

    @Field(() => BlogPostWhereInput, {nullable:true})
    is?: BlogPostWhereInput;

    @Field(() => BlogPostWhereInput, {nullable:true})
    isNot?: BlogPostWhereInput;
}
