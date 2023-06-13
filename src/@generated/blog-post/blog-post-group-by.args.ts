import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BlogPostWhereInput } from './blog-post-where.input';
import { Type } from 'class-transformer';
import { BlogPostOrderByWithAggregationInput } from './blog-post-order-by-with-aggregation.input';
import { BlogPostScalarFieldEnum } from './blog-post-scalar-field.enum';
import { BlogPostScalarWhereWithAggregatesInput } from './blog-post-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { BlogPostCountAggregateInput } from './blog-post-count-aggregate.input';
import { BlogPostAvgAggregateInput } from './blog-post-avg-aggregate.input';
import { BlogPostSumAggregateInput } from './blog-post-sum-aggregate.input';
import { BlogPostMinAggregateInput } from './blog-post-min-aggregate.input';
import { BlogPostMaxAggregateInput } from './blog-post-max-aggregate.input';

@ArgsType()
export class BlogPostGroupByArgs {

    @Field(() => BlogPostWhereInput, {nullable:true})
    @Type(() => BlogPostWhereInput)
    where?: BlogPostWhereInput;

    @Field(() => [BlogPostOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<BlogPostOrderByWithAggregationInput>;

    @Field(() => [BlogPostScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof BlogPostScalarFieldEnum>;

    @Field(() => BlogPostScalarWhereWithAggregatesInput, {nullable:true})
    having?: BlogPostScalarWhereWithAggregatesInput;

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
