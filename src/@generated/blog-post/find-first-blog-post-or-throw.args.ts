import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BlogPostWhereInput } from './blog-post-where.input';
import { Type } from 'class-transformer';
import { BlogPostOrderByWithRelationInput } from './blog-post-order-by-with-relation.input';
import { BlogPostWhereUniqueInput } from './blog-post-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BlogPostScalarFieldEnum } from './blog-post-scalar-field.enum';

@ArgsType()
export class FindFirstBlogPostOrThrowArgs {

    @Field(() => BlogPostWhereInput, {nullable:true})
    @Type(() => BlogPostWhereInput)
    where?: BlogPostWhereInput;

    @Field(() => [BlogPostOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BlogPostOrderByWithRelationInput>;

    @Field(() => BlogPostWhereUniqueInput, {nullable:true})
    cursor?: BlogPostWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [BlogPostScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof BlogPostScalarFieldEnum>;
}
