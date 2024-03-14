import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SeanceService } from './seance.service';
import { CreateSeanceDto } from './dto/create-seance.dto';
import { UpdateSeanceDto } from './dto/update-seance.dto';
import { ApiTags } from "@nestjs/swagger";

@ApiTags('seance')
@Controller('seance')
export class SeanceController {
  constructor(private readonly seanceService: SeanceService) {}

  @Post()
  create(@Body() createSeanceDto: CreateSeanceDto) {
    return this.seanceService.create(createSeanceDto);
  }

  @Get()
  findAll() {
    return this.seanceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.seanceService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSeanceDto: UpdateSeanceDto) {
    return this.seanceService.update(id, updateSeanceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.seanceService.remove(id);
  }
}
