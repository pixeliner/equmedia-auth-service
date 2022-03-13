export class SetRefreshTokenCommand {
  constructor(
    public readonly refreshToken: string,
    public readonly userId: string,
  ) {}
}
