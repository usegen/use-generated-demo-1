import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlogPostWhereUniqueInput } from './blog-post-where-unique.input';
import { Type } from 'class-transformer';
import { BlogPostUpdateWithoutAuthorInput } from './blog-post-update-without-author.input';

@InputType()
export class BlogPostUpdateWithWhereUniqueWithoutAuthorInput {

    @Field(() => BlogPostWhereUniqueInput, {nullable:false})
    @Type(() => BlogPostWhereUniqueInput)
    where!: BlogPostWhereUniqueInput;

    @Field(() => BlogPostUpdateWithoutAuthorInput, {nullable:false})
    @Type(() => BlogPostUpdateWithoutAuthorInput)
    data!: BlogPostUpdateWithoutAuthorInput;
}
