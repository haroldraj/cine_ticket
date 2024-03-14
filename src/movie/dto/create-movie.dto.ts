import { ApiProperty } from "@nestjs/swagger";

export class CreateMovieDto {
  @ApiProperty()
  readonly title: string;

  @ApiProperty()
  readonly minute: number;

  @ApiProperty()
  readonly limit_age: number;

  @ApiProperty()
  readonly category_id: string;
}
