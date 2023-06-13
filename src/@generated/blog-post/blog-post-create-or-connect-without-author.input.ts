import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlogPostWhereUniqueInput } from './blog-post-where-unique.input';
import { Type } from 'class-transformer';
import { BlogPostCreateWithoutAuthorInput } from './blog-post-create-without-author.input';

@InputType()
export class BlogPostCreateOrConnectWithoutAuthorInput {

    @Field(() => BlogPostWhereUniqueInput, {nullable:false})
    @Type(() => BlogPostWhereUniqueInput)
    where!: BlogPostWhereUniqueInput;

    @Field(() => BlogPostCreateWithoutAuthorInput, {nullable:false})
    @Type(() => BlogPostCreateWithoutAuthorInput)
    create!: BlogPostCreateWithoutAuthorInput;
}
