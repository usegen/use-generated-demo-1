import { Resolver, Query, Mutation, Args, Int, createUnionType, ObjectType} from '@nestjs/graphql';

import { User, UserUpdateInput, UserCreateInput, UserOrderByWithRelationInput, UserWhereInput } from 'src/@generated/user';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserNestedArgsStartPoint } from './user.nested-args-types';
import { UserOrList, ExtendedUser } from '../user.custom-types';
import { UserService } from '../user.service';

import {UseGuards} from '@nestjs/common'
import { ListMetadata } from 'src/custom-types/list-metadata';

import { Roles } from '../../../auth/decorators/roles.decorator';
import { RolesGuard } from '../../../auth/guards/roles.guard';
import { GqlAuthGuard } from 'src/auth/guards/gql-login.guard';


@Resolver(() => UserOrList)

export class UserGeneratedResolver {
  constructor(
    protected readonly prisma: PrismaService,
    protected readonly userService: UserService
    ) {}

  @Query(() => [ExtendedUser], { name: 'allUsers' })
  
  findAll(
    @Args({name:'page', nullable: true, defaultValue: 1}) page: number,
    @Args({name:'perPage', nullable: true, defaultValue: 10}) perPage: number,
    @Args({name:'orderBy', nullable: true, type: () => [UserOrderByWithRelationInput] }) orderBy: UserOrderByWithRelationInput[],
    @Args({name:'where', nullable: true}) where: UserWhereInput,
    @Args({name:'nestedArgs', nullable: true}) nestedArgs: UserNestedArgsStartPoint
  ) {
    const skip =(page - 1) * perPage;
    return this.userService.allUsers(
      perPage,
      skip,
      orderBy,
      where,
      nestedArgs
    );
  }

  @Query(() => ListMetadata, { name: '_allUsersMeta' })
  
  async countAll(
    @Args({name:'orderBy', nullable: true, type: () => [UserOrderByWithRelationInput] }) orderBy: UserOrderByWithRelationInput[],
    @Args({name:'where', nullable: true}) where: UserWhereInput,
  ) {

    const count = await this.prisma.user.count({
      orderBy,
      where   
    });
    return {count};
  }
  @Query(() => ExtendedUser, { name: 'User' })
  
  findOne(
    @Args('id', { type: () => Int }) id: number,
    @Args({name:'nestedArgs', nullable: true}) nestedArgs: UserNestedArgsStartPoint) {
    return this.userService.findOneUser(id,nestedArgs);
  }

  @Mutation(() => User)
  
  createUser(@Args('createInput') input: UserCreateInput ) {
    return this.userService.createUser(input)
  }

  @Mutation(() => User)
  
  updateUser(@Args('id', { type: () => Int }) id: number, @Args('updateInput') input: UserUpdateInput) {
    return this.userService.updateUser(id,input)
  }

  @Mutation(() => User)
  
  deleteUser(@Args('id', { type: () => Int }) id: number) {
    return this.userService.deleteUser(id);
  }


}
