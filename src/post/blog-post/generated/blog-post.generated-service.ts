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
  comments: {
    include: {
      author: true,
      post: true
    },
     ...convertPageAndPerPageToTakeAndSkip(nestedArgs?.comments?.args)
  }
}
}

@Injectable()
export class BlogPostGeneratedService {
  constructor(public readonly prisma: PrismaService){}

  allBlogPosts (take, skip, orderBy, where,nestedArgs){
    const includeProp: any = !!Object.keys(getInclude(nestedArgs)).length
    ? {
      include: getInclude(nestedArgs)
    }
    : {}
    return this.prisma.blogPost.findMany({
      take,
      skip,
      orderBy,
      where,
      ...includeProp
    });
  }
  findOneBlogPost = (id,nestedArgs) => {
    const includeProp: any = !!Object.keys(getInclude(nestedArgs)).length
    ? {
      include: getInclude(nestedArgs)
    }
    : {}

    return this.prisma.blogPost.findUnique(
      {
        where: { id },
        ...includeProp
    });
  }
  deleteBlogPost = (id) => {
    return this.prisma.blogPost.delete(
      {
        where: { id }
    });
  }
  updateBlogPost  =(id,input)=>{
    return this.prisma.blogPost.update({where: { id }, data:input});
  }
  createBlogPost  =(input)=>{
    return this.prisma.blogPost.create({data:input});
  }
  
}