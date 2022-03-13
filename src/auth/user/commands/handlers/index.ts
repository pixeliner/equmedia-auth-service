import { ConfirmAccountCreationCommandHandler } from './confirm-account-creation.handler';
import { ChangeUserPasswordHandler } from './change-user-password.handler';
import { DeleteUserAccountHandler } from './delete-user-account.handler';
import { RemoveRefreshTokenHandler } from './remove-refresh-token.handler';
import { GenerateForgotPasswordTokenHandler } from './generate-forgot-password-token.handler';
import { SetNewPasswordHandler } from './set-new-password.handler';

export const CommandHandlers = [
  ConfirmAccountCreationCommandHandler,
  ChangeUserPasswordHandler,
  DeleteUserAccountHandler,
  RemoveRefreshTokenHandler,
  GenerateForgotPasswordTokenHandler,
  SetNewPasswordHandler,
];
