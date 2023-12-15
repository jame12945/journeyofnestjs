/* eslint-disable prettier/prettier */

import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateUserDto {
    //specific each Vallidation Type
    @IsNotEmpty()
    username: string;
    @IsEmail()
    @IsNotEmpty()
    email: string;

}