/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
@Injectable()
export class ExampleMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('example middleware');
    //add header for token before get in to path users.module that we set
    console.log(req.headers.authorization);
    const { authorization } = req.headers;

    if(!authorization) 
     throw new HttpException('No authorization token',HttpStatus.FORBIDDEN);

     if(authorization === 'fdvnbcxvsxvdfblbjlkioorkjgoerk')
     next();
     else
     throw new HttpException('Invalid authorization token',HttpStatus.FORBIDDEN);
  }
}
