import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BlogPostWhereInput } from './blog-post-where.input';
import { Type } from 'class-transformer';
import { BlogPostOrderByWithRelationInput } from './blog-post-order-by-with-relation.input';
import { BlogPostWhereUniqueInput } from './blog-post-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BlogPostCountAggregateInput } from './blog-post-count-aggregate.input';
import { BlogPostAvgAggregateInput } from './blog-post-avg-aggregate.input';
import { BlogPostSumAggregateInput } from './blog-post-sum-aggregate.input';
import { BlogPostMinAggregateInput } from './blog-post-min-aggregate.input';
import { BlogPostMaxAggregateInput } from './blog-post-max-aggregate.input';

@ArgsType()
export class BlogPostAggregateArgs {

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

    @Field(() => BlogPostCountAggregateInput, {nullable:true})
    _count?: BlogPostCountAggregateInput;

    @Field(() => BlogPostAvgAggregateInput, {nullable:true})
    _avg?: BlogPostAvgAggregateInput;

    @Field(() => BlogPostSumAggregateInput, {nullable:true})
    _sum?: BlogPostSumAggregateInput;

    @Field(() => BlogPostMinAggregateInput, {nullable:true})
    _min?: BlogPostMinAggregateInput;

    @Field(() => BlogPostMaxAggregateInput, {nullable:true})
    _max?: BlogPostMaxAggregateInput;
}
