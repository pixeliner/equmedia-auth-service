import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AccessControlDto } from '../dto';
import { AuthorizationService } from '../services/authorization.service';

@Controller('authorization')
export class AuthorizationController {
  constructor(private readonly authorizationService: AuthorizationService) {}

  @MessagePattern({ role: 'authorization', cmd: 'checkAccess' })
  async checkAccessControl(
    accessControlDto: AccessControlDto,
  ): Promise<boolean> {
    return this.authorizationService.checkAccessControl(accessControlDto);
  }

  @MessagePattern({ role: 'authorization', cmd: 'getCookieWithJwtAccessToken' })
  getCookieWithJwtAccessToken(id: string): string {
    return this.authorizationService.getCookieWithJwtAccessToken(id);
  }
}
