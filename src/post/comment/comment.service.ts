import { Injectable } from '@nestjs/common';
import { CommentGeneratedService } from './generated/comment.generated-service';

@Injectable()
export class CommentService extends CommentGeneratedService {
  // this overrides the allComment from the  CommentGeneratedService and hardcodes the property take to 2
  // that means allComment will only return first 2 elements
  // allComment (take, skip, orderBy, where){
  //   return this.prisma.comment.findMany({
  //     take:2,
  //     skip,
  //     orderBy,
  //     where
  //   });
  // }
}
