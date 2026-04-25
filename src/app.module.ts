import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './infrastructure/database/database';
import { CqrsModule } from '@nestjs/cqrs';
import { AudioModule } from './feature/audio/audio.module';
import { UserModule } from './feature/user/user.module';
import { RouterModule } from '@nestjs/core';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), DatabaseModule,CqrsModule.forRoot({
    
  }),AudioModule,UserModule,RouterModule.register([
    {
      module:UserModule,
      path:"/user",
    },
    {
      module:AudioModule,
      path:"/audio"
    }
  ])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
