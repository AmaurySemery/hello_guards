import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class EcoloGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();
    console.log('inside EcoloGuard / body', req.body);
    if (req.body.vehicle !== 'bike') {
      return false;
    } else {
      return true;
    }
  }
}
