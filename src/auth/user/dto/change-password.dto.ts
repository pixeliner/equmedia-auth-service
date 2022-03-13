export class ChangePasswordDto {
  id: string;
  changePasswordData: {
    old_password: string;
    new_password: string;
  };
}
