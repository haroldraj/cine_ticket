import { ApiProperty } from "@nestjs/swagger";

export class CreateCinemaDto {
  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  readonly address: string;

}
