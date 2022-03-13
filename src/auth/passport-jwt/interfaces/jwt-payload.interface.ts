export interface IJwtPayload {
  userId: string;
  userEmail?: string;
  iat?: number;
  exp?: number;
}
