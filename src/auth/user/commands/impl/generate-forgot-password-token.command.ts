export class GenerateForgotPasswordTokenCommand {
  constructor(
    public readonly userId: string,
    public readonly userEmail: string,
  ) {}
}
