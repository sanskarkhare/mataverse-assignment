import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpException } from '@nestjs/common';
import mongoose from 'mongoose';



async function bootstrap() {

  const URI = process.env.MONGODB_URL

  try {
    mongoose.connect('mongodb+srv://sk:pass123@cluster0.vwtxc.mongodb.net/social-media?retryWrites=true&w=majority')
  } catch (error) {
    console.log("unable to connect to mongodb")
    throw error;

  }
    
  
  const app = await NestFactory.create(AppModule);
  await app.enableCors()
  await app.listen(3001);
 
}

bootstrap();
