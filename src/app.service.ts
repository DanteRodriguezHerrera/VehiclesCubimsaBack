import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class AppService {

  @Cron('0 */14 * * * *')
  getHello(): string {
    console.log('Hello World! on 3000 Prueba vehículos')
    return 'Hello World! on 3000 Prueba vehículos';
  }
}
