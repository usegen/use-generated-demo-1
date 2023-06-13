import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service';
import { convertPageAndPerPageToTakeAndSkip } from 'src/generated-utils/service';


const getInclude = (nestedArgs) => { 
return {
  comments: {
     ...convertPageAndPerPageToTakeAndSkip(nestedArgs?.comments?.args)
  },
  posts: {
     ...convertPageAndPerPageToTakeAndSkip(nestedArgs?.posts?.args)
  }
}
}

@Injectable()
export class UserGeneratedService {
  constructor(public readonly prisma: PrismaService){}

  allUsers (take, skip, orderBy, where,nestedArgs){
    const includeProp: any = !!Object.keys(getInclude(nestedArgs)).length
    ? {
      include: getInclude(nestedArgs)
    }
    : {}
    return this.prisma.user.findMany({
      take,
      skip,
      orderBy,
      where,
      ...includeProp
    });
  }
  findOneUser = (id,nestedArgs) => {
    const includeProp: any = !!Object.keys(getInclude(nestedArgs)).length
    ? {
      include: getInclude(nestedArgs)
    }
    : {}

    return this.prisma.user.findUnique(
      {
        where: { id },
        ...includeProp
    });
  }
  deleteUser = (id) => {
    return this.prisma.user.delete(
      {
        where: { id }
    });
  }
  updateUser  =(id,input)=>{
    return this.prisma.user.update({where: { id }, data:input});
  }
  createUser  =(input)=>{
    return this.prisma.user.create({data:input});
  }
  
}