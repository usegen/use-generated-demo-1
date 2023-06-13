import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service';
import { convertPageAndPerPageToTakeAndSkip } from 'src/generated-utils/service';


const getInclude = (nestedArgs) => { 
return {
  author: {
    include: {
      comments: {
         ...convertPageAndPerPageToTakeAndSkip(nestedArgs?.author?.comments?.args)
      },
      posts: {
         ...convertPageAndPerPageToTakeAndSkip(nestedArgs?.author?.posts?.args)
      }
    }
  },
  post: {
    include: {
      author: true,
      comments: {
         ...convertPageAndPerPageToTakeAndSkip(nestedArgs?.post?.comments?.args)
      }
    }
  }
}
}

@Injectable()
export class CommentGeneratedService {
  constructor(public readonly prisma: PrismaService){}

  allComments (take, skip, orderBy, where,nestedArgs){
    const includeProp: any = !!Object.keys(getInclude(nestedArgs)).length
    ? {
      include: getInclude(nestedArgs)
    }
    : {}
    return this.prisma.comment.findMany({
      take,
      skip,
      orderBy,
      where,
      ...includeProp
    });
  }
  findOneComment = (id,nestedArgs) => {
    const includeProp: any = !!Object.keys(getInclude(nestedArgs)).length
    ? {
      include: getInclude(nestedArgs)
    }
    : {}

    return this.prisma.comment.findUnique(
      {
        where: { id },
        ...includeProp
    });
  }
  deleteComment = (id) => {
    return this.prisma.comment.delete(
      {
        where: { id }
    });
  }
  updateComment  =(id,input)=>{
    return this.prisma.comment.update({where: { id }, data:input});
  }
  createComment  =(input)=>{
    return this.prisma.comment.create({data:input});
  }
  
}