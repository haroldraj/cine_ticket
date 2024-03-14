import { ApiProperty } from "@nestjs/swagger";

  export class CreateSalleDto {
  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  readonly seat_max: number;

  @ApiProperty()
  readonly cinema_id: string;
}
