import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';

@InputType()
export class BlogPostScalarWhereWithAggregatesInput {

    @Field(() => [BlogPostScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<BlogPostScalarWhereWithAggregatesInput>;

    @Field(() => [BlogPostScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<BlogPostScalarWhereWithAggregatesInput>;

    @Field(() => [BlogPostScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<BlogPostScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    content?: StringNullableWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    published?: BoolWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    authorId?: IntNullableWithAggregatesFilter;
}
