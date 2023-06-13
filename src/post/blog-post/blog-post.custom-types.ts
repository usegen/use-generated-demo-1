
import {  
  createUnionType, ObjectType, PartialType, Field
} from '@nestjs/graphql';

import {
  BlogPost as InitialBlogPost,
} from 'src/@generated/blog-post';
import { ListMetadata } from 'src/custom-types/list-metadata';

@ObjectType()
export class ExtendedBlogPost extends PartialType(InitialBlogPost) {
}

export const BlogPostOrList = createUnionType({
  name: 'BlogPostOrList',
  types: () => [ListMetadata, ExtendedBlogPost],
});