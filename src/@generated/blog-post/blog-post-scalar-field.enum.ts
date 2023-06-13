import { registerEnumType } from '@nestjs/graphql';

export enum BlogPostScalarFieldEnum {
    id = "id",
    title = "title",
    content = "content",
    published = "published",
    authorId = "authorId"
}


registerEnumType(BlogPostScalarFieldEnum, { name: 'BlogPostScalarFieldEnum', description: undefined })
