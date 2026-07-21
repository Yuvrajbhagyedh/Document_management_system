import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

/** Validates the Bearer JWT and populates request.user via JwtStrategy. */
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}
