import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlogPostCreateWithoutAuthorInput } from './blog-post-create-without-author.input';
import { Type } from 'class-transformer';
import { BlogPostCreateOrConnectWithoutAuthorInput } from './blog-post-create-or-connect-without-author.input';
import { BlogPostUpsertWithWhereUniqueWithoutAuthorInput } from './blog-post-upsert-with-where-unique-without-author.input';
import { BlogPostCreateManyAuthorInputEnvelope } from './blog-post-create-many-author-input-envelope.input';
import { BlogPostWhereUniqueInput } from './blog-post-where-unique.input';
import { BlogPostUpdateWithWhereUniqueWithoutAuthorInput } from './blog-post-update-with-where-unique-without-author.input';
import { BlogPostUpdateManyWithWhereWithoutAuthorInput } from './blog-post-update-many-with-where-without-author.input';
import { BlogPostScalarWhereInput } from './blog-post-scalar-where.input';

@InputType()
export class BlogPostUncheckedUpdateManyWithoutAuthorNestedInput {

    @Field(() => [BlogPostCreateWithoutAuthorInput], {nullable:true})
    @Type(() => BlogPostCreateWithoutAuthorInput)
    create?: Array<BlogPostCreateWithoutAuthorInput>;

    @Field(() => [BlogPostCreateOrConnectWithoutAuthorInput], {nullable:true})
    @Type(() => BlogPostCreateOrConnectWithoutAuthorInput)
    connectOrCreate?: Array<BlogPostCreateOrConnectWithoutAuthorInput>;

    @Field(() => [BlogPostUpsertWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => BlogPostUpsertWithWhereUniqueWithoutAuthorInput)
    upsert?: Array<BlogPostUpsertWithWhereUniqueWithoutAuthorInput>;

    @Field(() => BlogPostCreateManyAuthorInputEnvelope, {nullable:true})
    @Type(() => BlogPostCreateManyAuthorInputEnvelope)
    createMany?: BlogPostCreateManyAuthorInputEnvelope;

    @Field(() => [BlogPostWhereUniqueInput], {nullable:true})
    @Type(() => BlogPostWhereUniqueInput)
    set?: Array<BlogPostWhereUniqueInput>;

    @Field(() => [BlogPostWhereUniqueInput], {nullable:true})
    @Type(() => BlogPostWhereUniqueInput)
    disconnect?: Array<BlogPostWhereUniqueInput>;

    @Field(() => [BlogPostWhereUniqueInput], {nullable:true})
    @Type(() => BlogPostWhereUniqueInput)
    delete?: Array<BlogPostWhereUniqueInput>;

    @Field(() => [BlogPostWhereUniqueInput], {nullable:true})
    @Type(() => BlogPostWhereUniqueInput)
    connect?: Array<BlogPostWhereUniqueInput>;

    @Field(() => [BlogPostUpdateWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => BlogPostUpdateWithWhereUniqueWithoutAuthorInput)
    update?: Array<BlogPostUpdateWithWhereUniqueWithoutAuthorInput>;

    @Field(() => [BlogPostUpdateManyWithWhereWithoutAuthorInput], {nullable:true})
    @Type(() => BlogPostUpdateManyWithWhereWithoutAuthorInput)
    updateMany?: Array<BlogPostUpdateManyWithWhereWithoutAuthorInput>;

    @Field(() => [BlogPostScalarWhereInput], {nullable:true})
    @Type(() => BlogPostScalarWhereInput)
    deleteMany?: Array<BlogPostScalarWhereInput>;
}
