import { Mutation, Query, Resolver } from '@nestjs/graphql';
import { LessonType } from './lesson.types';

@Resolver((of) => LessonType)
export class LessonResolver {
  @Query((returns) => LessonType)
  lesson() {
    return {
      id: 'cjjcs',
      name: 'Lesson ',
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),
    };
  }

  @Mutation((returns) => LessonType)
  createLesson() {}
}
