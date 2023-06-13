import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class BlogPostScalarWhereInput {

    @Field(() => [BlogPostScalarWhereInput], {nullable:true})
    AND?: Array<BlogPostScalarWhereInput>;

    @Field(() => [BlogPostScalarWhereInput], {nullable:true})
    OR?: Array<BlogPostScalarWhereInput>;

    @Field(() => [BlogPostScalarWhereInput], {nullable:true})
    NOT?: Array<BlogPostScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    content?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    published?: BoolFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    authorId?: IntNullableFilter;
}
