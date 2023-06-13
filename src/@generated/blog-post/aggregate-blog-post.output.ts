import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { BlogPostCountAggregate } from './blog-post-count-aggregate.output';
import { BlogPostAvgAggregate } from './blog-post-avg-aggregate.output';
import { BlogPostSumAggregate } from './blog-post-sum-aggregate.output';
import { BlogPostMinAggregate } from './blog-post-min-aggregate.output';
import { BlogPostMaxAggregate } from './blog-post-max-aggregate.output';

@ObjectType()
export class AggregateBlogPost {

    @Field(() => BlogPostCountAggregate, {nullable:true})
    _count?: BlogPostCountAggregate;

    @Field(() => BlogPostAvgAggregate, {nullable:true})
    _avg?: BlogPostAvgAggregate;

    @Field(() => BlogPostSumAggregate, {nullable:true})
    _sum?: BlogPostSumAggregate;

    @Field(() => BlogPostMinAggregate, {nullable:true})
    _min?: BlogPostMinAggregate;

    @Field(() => BlogPostMaxAggregate, {nullable:true})
    _max?: BlogPostMaxAggregate;
}
