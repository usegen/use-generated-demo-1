import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlogPostCreateWithoutAuthorInput } from './blog-post-create-without-author.input';
import { Type } from 'class-transformer';
import { BlogPostCreateOrConnectWithoutAuthorInput } from './blog-post-create-or-connect-without-author.input';
import { BlogPostCreateManyAuthorInputEnvelope } from './blog-post-create-many-author-input-envelope.input';
import { BlogPostWhereUniqueInput } from './blog-post-where-unique.input';

@InputType()
export class BlogPostUncheckedCreateNestedManyWithoutAuthorInput {

    @Field(() => [BlogPostCreateWithoutAuthorInput], {nullable:true})
    @Type(() => BlogPostCreateWithoutAuthorInput)
    create?: Array<BlogPostCreateWithoutAuthorInput>;

    @Field(() => [BlogPostCreateOrConnectWithoutAuthorInput], {nullable:true})
    @Type(() => BlogPostCreateOrConnectWithoutAuthorInput)
    connectOrCreate?: Array<BlogPostCreateOrConnectWithoutAuthorInput>;

    @Field(() => BlogPostCreateManyAuthorInputEnvelope, {nullable:true})
    @Type(() => BlogPostCreateManyAuthorInputEnvelope)
    createMany?: BlogPostCreateManyAuthorInputEnvelope;

    @Field(() => [BlogPostWhereUniqueInput], {nullable:true})
    @Type(() => BlogPostWhereUniqueInput)
    connect?: Array<BlogPostWhereUniqueInput>;
}
