import { Resolver, Query, Mutation, Args, Int, createUnionType, ObjectType} from '@nestjs/graphql';

import { BlogPost, BlogPostUpdateInput, BlogPostCreateInput, BlogPostOrderByWithRelationInput, BlogPostWhereInput } from 'src/@generated/blog-post';
import { PrismaService } from 'src/prisma/prisma.service';
import { BlogPostNestedArgsStartPoint } from './blog-post.nested-args-types';
import { BlogPostOrList, ExtendedBlogPost } from '../blog-post.custom-types';
import { BlogPostService } from '../blog-post.service';

import {UseGuards} from '@nestjs/common'
import { ListMetadata } from 'src/custom-types/list-metadata';

import { Roles } from '../../../auth/decorators/roles.decorator';
import { RolesGuard } from '../../../auth/guards/roles.guard';
import { GqlAuthGuard } from 'src/auth/guards/gql-login.guard';


@Resolver(() => BlogPostOrList)

export class BlogPostGeneratedResolver {
  constructor(
    protected readonly prisma: PrismaService,
    protected readonly blogPostService: BlogPostService
    ) {}

  @Query(() => [ExtendedBlogPost], { name: 'allBlogPosts' })
  
  findAll(
    @Args({name:'page', nullable: true, defaultValue: 1}) page: number,
    @Args({name:'perPage', nullable: true, defaultValue: 10}) perPage: number,
    @Args({name:'orderBy', nullable: true, type: () => [BlogPostOrderByWithRelationInput] }) orderBy: BlogPostOrderByWithRelationInput[],
    @Args({name:'where', nullable: true}) where: BlogPostWhereInput,
    @Args({name:'nestedArgs', nullable: true}) nestedArgs: BlogPostNestedArgsStartPoint
  ) {
    const skip =(page - 1) * perPage;
    return this.blogPostService.allBlogPosts(
      perPage,
      skip,
      orderBy,
      where,
      nestedArgs
    );
  }

  @Query(() => ListMetadata, { name: '_allBlogPostsMeta' })
  
  async countAll(
    @Args({name:'orderBy', nullable: true, type: () => [BlogPostOrderByWithRelationInput] }) orderBy: BlogPostOrderByWithRelationInput[],
    @Args({name:'where', nullable: true}) where: BlogPostWhereInput,
  ) {

    const count = await this.prisma.blogPost.count({
      orderBy,
      where   
    });
    return {count};
  }
  @Query(() => ExtendedBlogPost, { name: 'BlogPost' })
  
  findOne(
    @Args('id', { type: () => Int }) id: number,
    @Args({name:'nestedArgs', nullable: true}) nestedArgs: BlogPostNestedArgsStartPoint) {
    return this.blogPostService.findOneBlogPost(id,nestedArgs);
  }

  @Mutation(() => BlogPost)
  
  createBlogPost(@Args('createInput') input: BlogPostCreateInput ) {
    return this.blogPostService.createBlogPost(input)
  }

  @Mutation(() => BlogPost)
  
  updateBlogPost(@Args('id', { type: () => Int }) id: number, @Args('updateInput') input: BlogPostUpdateInput) {
    return this.blogPostService.updateBlogPost(id,input)
  }

  @Mutation(() => BlogPost)
  
  deleteBlogPost(@Args('id', { type: () => Int }) id: number) {
    return this.blogPostService.deleteBlogPost(id);
  }


}
