import { Transform } from 'class-transformer';
import { IsInt, IsOptional, IsString, Max, Min } from 'class-validator';

export class PaginationQueryDto {
  @IsOptional()
  @IsString()
  cursor?: string;

  @IsOptional()
  @Transform(({ value }) => {
    if (typeof value === 'string') {
      return parseInt(value, 10);
    }
    if (typeof value === 'number') {
      return value;
    }
    return undefined;
  })
  @IsInt()
  @Min(1)
  @Max(100)
  limit = 20;
}
