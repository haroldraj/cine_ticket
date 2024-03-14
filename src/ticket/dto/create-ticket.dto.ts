import { ApiProperty } from "@nestjs/swagger";

export class CreateTicketDto {
  @ApiProperty()
  readonly user_id: string;

  @ApiProperty()
  readonly seance_id: string;

  @ApiProperty()
  readonly code_barre: string;

  @ApiProperty()
  readonly seat: string;
}
