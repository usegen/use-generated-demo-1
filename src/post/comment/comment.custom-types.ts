
import {  
  createUnionType, ObjectType, PartialType, Field
} from '@nestjs/graphql';

import {
  Comment as InitialComment,
} from 'src/@generated/comment';
import { ListMetadata } from 'src/custom-types/list-metadata';

@ObjectType()
export class ExtendedComment extends PartialType(InitialComment) {
}

export const CommentOrList = createUnionType({
  name: 'CommentOrList',
  types: () => [ListMetadata, ExtendedComment],
});