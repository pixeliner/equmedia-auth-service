import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';

import { RpcExceptionService } from '../../../../utils/exception-handling';
import { UserWriteRepository } from '../../../../db/repositories';
import { DeleteUserAccountCommand } from '../impl';

@CommandHandler(DeleteUserAccountCommand)
export class DeleteUserAccountHandler
  implements ICommandHandler<DeleteUserAccountCommand>
{
  constructor(
    @InjectRepository(UserWriteRepository)
    private readonly userWriteRepository: UserWriteRepository,
    private readonly rpcExceptionService: RpcExceptionService,
  ) {}

  async execute(command: DeleteUserAccountCommand) {
    try {
      await this.userWriteRepository.softDelete(command.id);
      return {
        response: `User with id ${command.id} successfuly deleted`,
      };
    } catch (error) {
      this.rpcExceptionService.throwCatchedException(error);
    }
  }
}
