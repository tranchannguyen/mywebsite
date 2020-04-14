import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import {MongooseModule} from '@nestjs/mongoose'

@Module({
  imports: [ProductsModule,MongooseModule.forRoot('mongodb+srv://nguyenchan:b17K1WhmnPUIOwg6@cluster0-johz8.gcp.mongodb.net/mywebsite?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
