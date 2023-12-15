/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */

import { IsEmail, IsNotEmpty, IsNumber } from "class-validator";

export class CreateUserDto {
    //specific each Vallidation Type
    @IsNotEmpty()
    username: string;
    @IsEmail()
    @IsNotEmpty()
    email: string;
    @IsNotEmpty()
    age:number

}