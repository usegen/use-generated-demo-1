import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumUserRoleNullableListFilter } from '../prisma/enum-user-role-nullable-list-filter.input';
import { CommentListRelationFilter } from '../comment/comment-list-relation-filter.input';
import { BlogPostListRelationFilter } from '../blog-post/blog-post-list-relation-filter.input';

@InputType()
export class UserWhereInput {

    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    passwordHash?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    age?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    resetToken?: StringNullableFilter;

    @Field(() => EnumUserRoleNullableListFilter, {nullable:true})
    roles?: EnumUserRoleNullableListFilter;

    @Field(() => CommentListRelationFilter, {nullable:true})
    comments?: CommentListRelationFilter;

    @Field(() => BlogPostListRelationFilter, {nullable:true})
    posts?: BlogPostListRelationFilter;
}
