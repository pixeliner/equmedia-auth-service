import {
  ClassSerializerInterceptor,
  Controller,
  UseInterceptors,
} from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

import { AuthCredentialsDto } from '../../authentication/dto';
import { UserEntity } from '../../../db/entities';
import {
  AuthConfirmationDto,
  AuthEmailDto,
  ChangePasswordDto,
  GetRefreshUserDto,
  GetUserIdDto,
  SetNewPasswordDto,
} from '../dto';
import {
  AuthEmailModel,
  AuthIdModel,
  ForgotPasswordTokenModel,
  StringResponse,
} from '../models';
import { UserService } from '../services/user.service';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern({ role: 'user', cmd: 'getId' })
  async getUserId(getUserIdDto: GetUserIdDto): Promise<AuthIdModel> {
    return this.userService.getUserId(getUserIdDto);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @MessagePattern({ role: 'user', cmd: 'getUserById' })
  async getUserById(id: string): Promise<UserEntity> {
    return this.userService.getUserById(id);
  }

  @MessagePattern({ role: 'user', cmd: 'getUserIfRefreshTokenMatches' })
  async getUserIfRefreshTokenMatches(
    getRefreshUserIdDto: GetRefreshUserDto,
  ): Promise<UserEntity> {
    return this.userService.getUserIfRefreshTokenMatches(getRefreshUserIdDto);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @MessagePattern({ role: 'user', cmd: 'getAuthenticatedUser' })
  getAuthenticatedUser(
    authCredentialsDto: AuthCredentialsDto,
  ): Promise<UserEntity> {
    return this.userService.getAuthenticatedUser(authCredentialsDto);
  }

  @MessagePattern({ role: 'user', cmd: 'changePassword' })
  async changeUserPassword(
    changePasswordDto: ChangePasswordDto,
  ): Promise<StringResponse> {
    return this.userService.changeUserPassword(changePasswordDto);
  }

  @MessagePattern({ role: 'user', cmd: 'deleteAccount' })
  async deleteUserAccount(id: string): Promise<StringResponse> {
    return this.userService.deleteUserAccount(id);
  }

  @MessagePattern({ role: 'user', cmd: 'confirmAccount' })
  async confirmAccountCreation(
    authConfirmationDto: AuthConfirmationDto,
  ): Promise<void> {
    return this.userService.confirmAccountCreation(authConfirmationDto);
  }

  @MessagePattern({ role: 'user', cmd: 'removeRefreshToken' })
  async removeRefreshToken(userId: string): Promise<void> {
    return this.userService.removeRefreshToken(userId);
  }

  @MessagePattern({ role: 'user', cmd: 'forgot-password' })
  async forgotPassword(
    authEmailDto: AuthEmailDto,
  ): Promise<ForgotPasswordTokenModel> {
    return this.userService.forgotPassword(authEmailDto);
  }

  @MessagePattern({ role: 'user', cmd: 'set-new-password' })
  async setNewPassword(
    setNewPasswordDto: SetNewPasswordDto,
  ): Promise<AuthEmailModel> {
    return this.userService.setNewPassword(setNewPasswordDto);
  }
}
