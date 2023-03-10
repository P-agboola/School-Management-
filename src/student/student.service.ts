import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStudentInput } from './create-student.input';
import { Student } from './student.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
  ) {}

  async getAllStudent(): Promise<Student[]> {
    return await this.studentRepository.find();
  }

  async getStudent(id: string): Promise<Student> {
    return await this.studentRepository.findOneBy({ id });
  }

  async createStudent(
    createStudentInput: CreateStudentInput,
  ): Promise<Student> {
    const { firstName, lastName } = createStudentInput;
    const student = await this.studentRepository.create({
      id: uuid(),
      firstName,
      lastName,
    });
    return this.studentRepository.save(student);
  }

  async getManyStudent(studentIds: string[]): Promise<Student[]> {
    return await this.studentRepository.find({
    // @ts-ignore
      where: { id: { $in: studentIds } },
    });
  }
}

