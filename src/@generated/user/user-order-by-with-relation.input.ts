import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CommentOrderByRelationAggregateInput } from '../comment/comment-order-by-relation-aggregate.input';
import { BlogPostOrderByRelationAggregateInput } from '../blog-post/blog-post-order-by-relation-aggregate.input';

@InputType()
export class UserOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    passwordHash?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    age?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    resetToken?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    roles?: keyof typeof SortOrder;

    @Field(() => CommentOrderByRelationAggregateInput, {nullable:true})
    comments?: CommentOrderByRelationAggregateInput;

    @Field(() => BlogPostOrderByRelationAggregateInput, {nullable:true})
    posts?: BlogPostOrderByRelationAggregateInput;
}
