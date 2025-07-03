import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
  ) {}

  async create(createPostDto: CreatePostDto) {
    try {
      const post = this.postRepository.create(createPostDto);
      await this.postRepository.save(post);
      return post;
    } catch (error) {
      throw new Error(`Error creating post: ${error}`);
    }
  }

  findAll() {
    return this.postRepository.find();
  }

  async remove(id: number) {
    try {
      const post = await this.postRepository.findOneBy({ id });
      if (!post) {
        throw new NotFoundException(`Post with ID ${id} not found`);
      }
      await this.postRepository.remove(post);
      return post;
    } catch (error) {
      throw new Error(`Error removing post: ${error}`);
    }
  }
}
