import { IsNotEmpty, IsEnum, IsOptional } from 'class-validator';
import { TaskStatus } from '../tasks-status.enum';

export class GetTaskFilterDto {
  @IsOptional()
  @IsEnum(TaskStatus)
  status: TaskStatus;

  @IsOptional()
  @IsNotEmpty()
  search: string;
}
