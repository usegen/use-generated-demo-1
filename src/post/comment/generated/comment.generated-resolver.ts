import { Resolver, Query, Mutation, Args, Int, createUnionType, ObjectType} from '@nestjs/graphql';

import { Comment, CommentUpdateInput, CommentCreateInput, CommentOrderByWithRelationInput, CommentWhereInput } from 'src/@generated/comment';
import { PrismaService } from 'src/prisma/prisma.service';
import { CommentNestedArgsStartPoint } from './comment.nested-args-types';
import { CommentOrList, ExtendedComment } from '../comment.custom-types';
import { CommentService } from '../comment.service';

import {UseGuards} from '@nestjs/common'
import { ListMetadata } from 'src/custom-types/list-metadata';

import { Roles } from '../../../auth/decorators/roles.decorator';
import { RolesGuard } from '../../../auth/guards/roles.guard';
import { GqlAuthGuard } from 'src/auth/guards/gql-login.guard';


@Resolver(() => CommentOrList)

export class CommentGeneratedResolver {
  constructor(
    protected readonly prisma: PrismaService,
    protected readonly commentService: CommentService
    ) {}

  @Query(() => [ExtendedComment], { name: 'allComments' })
  
  findAll(
    @Args({name:'page', nullable: true, defaultValue: 1}) page: number,
    @Args({name:'perPage', nullable: true, defaultValue: 10}) perPage: number,
    @Args({name:'orderBy', nullable: true, type: () => [CommentOrderByWithRelationInput] }) orderBy: CommentOrderByWithRelationInput[],
    @Args({name:'where', nullable: true}) where: CommentWhereInput,
    @Args({name:'nestedArgs', nullable: true}) nestedArgs: CommentNestedArgsStartPoint
  ) {
    const skip =(page - 1) * perPage;
    return this.commentService.allComments(
      perPage,
      skip,
      orderBy,
      where,
      nestedArgs
    );
  }

  @Query(() => ListMetadata, { name: '_allCommentsMeta' })
  
  async countAll(
    @Args({name:'orderBy', nullable: true, type: () => [CommentOrderByWithRelationInput] }) orderBy: CommentOrderByWithRelationInput[],
    @Args({name:'where', nullable: true}) where: CommentWhereInput,
  ) {

    const count = await this.prisma.comment.count({
      orderBy,
      where   
    });
    return {count};
  }
  @Query(() => ExtendedComment, { name: 'Comment' })
  
  findOne(
    @Args('id', { type: () => Int }) id: number,
    @Args({name:'nestedArgs', nullable: true}) nestedArgs: CommentNestedArgsStartPoint) {
    return this.commentService.findOneComment(id,nestedArgs);
  }

  @Mutation(() => Comment)
  
  createComment(@Args('createInput') input: CommentCreateInput ) {
    return this.commentService.createComment(input)
  }

  @Mutation(() => Comment)
  
  updateComment(@Args('id', { type: () => Int }) id: number, @Args('updateInput') input: CommentUpdateInput) {
    return this.commentService.updateComment(id,input)
  }

  @Mutation(() => Comment)
  
  deleteComment(@Args('id', { type: () => Int }) id: number) {
    return this.commentService.deleteComment(id);
  }


}
