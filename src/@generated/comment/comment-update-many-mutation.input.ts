import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CommentUpdateManyMutationInput {

    @Field(() => String, {nullable:true})
    content?: string;
}
