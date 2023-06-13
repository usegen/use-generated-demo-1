import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlogPostScalarWhereInput } from './blog-post-scalar-where.input';
import { Type } from 'class-transformer';
import { BlogPostUpdateManyMutationInput } from './blog-post-update-many-mutation.input';

@InputType()
export class BlogPostUpdateManyWithWhereWithoutAuthorInput {

    @Field(() => BlogPostScalarWhereInput, {nullable:false})
    @Type(() => BlogPostScalarWhereInput)
    where!: BlogPostScalarWhereInput;

    @Field(() => BlogPostUpdateManyMutationInput, {nullable:false})
    @Type(() => BlogPostUpdateManyMutationInput)
    data!: BlogPostUpdateManyMutationInput;
}
