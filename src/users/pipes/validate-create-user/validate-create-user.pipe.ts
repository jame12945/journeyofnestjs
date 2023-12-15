/* eslint-disable prettier/prettier */
import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';

@Injectable()
export class ValidateCreateUserPipe implements PipeTransform {
  transform(value: CreateUserDto, metadata: ArgumentMetadata) {
    console.log('Inside ValidateCreateUserPipe');
    console.log(value);
    console.log(metadata);
    //Transforn age string to number
    const parseAgeToInt = parseInt(value.age.toString());
    if(isNaN(parseAgeToInt)){
      console.log(`${value.age} is not a number`);
      throw new HttpException(
        'Invalid Data Type property age,Expect Number',
        HttpStatus.BAD_REQUEST,
      );
    }
    console.log(`${parseAgeToInt} is a age number`)
    return {...value, age: parseAgeToInt}

  }
}
