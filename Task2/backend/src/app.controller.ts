import { Body, Controller, Get,Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    // console.log('sk')
    return this.appService.getHello();
  }

  @Post('webhook')
   ListenToStream(@Body() body:any) {
    return this.appService.Listen(body);
    
  }

  @Get('contact')
  getAllContact() {
 
    return this.appService.getAllContact();
  }
}
