import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlogPostCreateManyAuthorInput } from './blog-post-create-many-author.input';
import { Type } from 'class-transformer';

@InputType()
export class BlogPostCreateManyAuthorInputEnvelope {

    @Field(() => [BlogPostCreateManyAuthorInput], {nullable:false})
    @Type(() => BlogPostCreateManyAuthorInput)
    data!: Array<BlogPostCreateManyAuthorInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
