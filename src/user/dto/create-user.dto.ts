import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty()
  readonly fullname: string;

  @ApiProperty()
  readonly mail: string;

  @ApiProperty()
  readonly age: number;
}
