import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { BlogPostCountOrderByAggregateInput } from './blog-post-count-order-by-aggregate.input';
import { BlogPostAvgOrderByAggregateInput } from './blog-post-avg-order-by-aggregate.input';
import { BlogPostMaxOrderByAggregateInput } from './blog-post-max-order-by-aggregate.input';
import { BlogPostMinOrderByAggregateInput } from './blog-post-min-order-by-aggregate.input';
import { BlogPostSumOrderByAggregateInput } from './blog-post-sum-order-by-aggregate.input';

@InputType()
export class BlogPostOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    published?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    authorId?: keyof typeof SortOrder;

    @Field(() => BlogPostCountOrderByAggregateInput, {nullable:true})
    _count?: BlogPostCountOrderByAggregateInput;

    @Field(() => BlogPostAvgOrderByAggregateInput, {nullable:true})
    _avg?: BlogPostAvgOrderByAggregateInput;

    @Field(() => BlogPostMaxOrderByAggregateInput, {nullable:true})
    _max?: BlogPostMaxOrderByAggregateInput;

    @Field(() => BlogPostMinOrderByAggregateInput, {nullable:true})
    _min?: BlogPostMinOrderByAggregateInput;

    @Field(() => BlogPostSumOrderByAggregateInput, {nullable:true})
    _sum?: BlogPostSumOrderByAggregateInput;
}
