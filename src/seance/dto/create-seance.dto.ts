import { ApiProperty } from "@nestjs/swagger";

export class CreateSeanceDto {
  @ApiProperty()
  readonly date: Date;

  @ApiProperty()
  readonly price: number;

  @ApiProperty()
  readonly movie_id: string;

  @ApiProperty()
  readonly salle_id: string;
}
