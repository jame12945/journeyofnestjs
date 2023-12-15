/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/utils/type';

@Injectable()
export class UsersService {
     
    //Truely this fakeUsers must comfrom database but fornow
     private fakeUsers = [
        { username : 'TiwatTest' , email: 'Tiwat@gmails.com'},
        { username : 'KongTest' , email: 'Kong@gmails.com'},
        { username : 'TaTest' , email: 'Ta@gmails.com'} ]
     fetchUsers(){
        return this.fakeUsers
     }
     createUsers(userDetails: CreateUserType){
       this.fakeUsers.push(userDetails);
       return ;
     }

    //Paramter From Controller must be match With Service in this case is 'id'
    fetchUserById(id: number){
        // return null;
        return { id ,username: 'TiwatTest' , email: 'Tiwat@gmails.com'}
      }
}
