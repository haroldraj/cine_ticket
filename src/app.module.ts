import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CinemaModule } from './cinema/cinema.module';
import { SalleModule } from './salle/salle.module';
import { MovieModule } from './movie/movie.module';
import { SeanceModule } from './seance/seance.module';
import { TicketModule } from './ticket/ticket.module';
import { CategoryModule } from './category/category.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/cinema'),UserModule, CinemaModule, SalleModule, MovieModule, SeanceModule, TicketModule, CategoryModule],
  //controllers: [AppController],
  //providers: [AppService],
})
export class AppModule {}
