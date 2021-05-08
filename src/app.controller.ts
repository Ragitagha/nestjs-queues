import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { AudioProducer } from './audio.producers';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly audioProducer: AudioProducer) {}

  @Get()
  getHello(): string {
    this.audioProducer.addJob()
    return this.appService.getHello();
  }
}
