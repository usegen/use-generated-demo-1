import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UserMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => String, {nullable:true})
    passwordHash?: string;

    @Field(() => String, {nullable:true})
    age?: string;

    @Field(() => String, {nullable:true})
    resetToken?: string;
}
