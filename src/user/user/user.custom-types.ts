
import {  
  createUnionType, ObjectType, PartialType, Field
} from '@nestjs/graphql';

import {
  User as InitialUser,
} from 'src/@generated/user';
import { ListMetadata } from 'src/custom-types/list-metadata';

@ObjectType()
export class ExtendedUser extends PartialType(InitialUser) {
}

export const UserOrList = createUnionType({
  name: 'UserOrList',
  types: () => [ListMetadata, ExtendedUser],
});