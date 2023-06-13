import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BlogPostWhereUniqueInput } from './blog-post-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueBlogPostOrThrowArgs {

    @Field(() => BlogPostWhereUniqueInput, {nullable:false})
    @Type(() => BlogPostWhereUniqueInput)
    where!: BlogPostWhereUniqueInput;
}
