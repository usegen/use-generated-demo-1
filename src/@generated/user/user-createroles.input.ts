import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRole } from '../prisma/user-role.enum';

@InputType()
export class UserCreaterolesInput {

    @Field(() => [UserRole], {nullable:false})
    set!: Array<keyof typeof UserRole>;
}
