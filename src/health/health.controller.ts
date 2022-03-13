import { Controller, Get } from '@nestjs/common';
import { HealthCheck } from '@nestjs/terminus';
import { HealthService } from './health.service';

@Controller('health')
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Get('/check-user-typeorm')
  @HealthCheck()
  checkUserTypeorm() {
    return this.healthService.checkUserTypeorm();
  }
}
