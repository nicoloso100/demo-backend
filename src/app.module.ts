import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Text, TextSchema } from './document.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://44.192.18.186:27017/db-test'),
    MongooseModule.forFeature([{ name: Text.name, schema: TextSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
