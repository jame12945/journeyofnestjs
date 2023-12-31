/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Body , Controller , Get ,HttpException,HttpStatus,Param ,ParseBoolPipe,ParseIntPipe,Post , Query ,Req ,Res, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common'
import { CreateUserDto } from '../dtos/CreateUser.dto'
import { UsersService } from '../services/users/users.service'
import { ValidateCreateUserPipe } from '../pipes/validate-create-user/validate-create-user.pipe'
import { AuthGuard } from '../guards/auth/auth.guard'


@Controller('users')

export class UsersController{
  constructor(private userService: UsersService ){}
  //MiddleWare FUnction call before actual route handler Example: Before Call getUsers,getUserByService,getUserById  
  //Middleware -> Benefit is Authenticated ,Correct bareertoken
  @Get()
  getUsers(@Query('sortDesc', ParseBoolPipe ) sortDesc : boolean){
    console.log(sortDesc)
    return [{ username : 'TiwatTest' , email: 'Tiwat@gmails.com'}]
  }

  @Get('service')
  @UseGuards(AuthGuard)
  getUserByService(){
    console.log(this.userService.fetchUsers())
    return this.userService.fetchUsers();
  }
  //CreateUserDto as RequestBody as data transfer Object
  //Use Validation for check argrument body decorator  Example: Decorator ->   @IsNotEmpty() ,@Query ,@Post
  @Post('create')
  @UsePipes(new ValidationPipe())
  createUser(@Body(ValidateCreateUserPipe) userData: CreateUserDto) { 
    // console.log(userData)
    // toPrecision specific number type if i type string the error happen but if use pipe convert its ok
    console.log(userData.age.toPrecision())
    return this.userService.createUsers(userData)
    // return{}

  }
  
  
  
  //Use Parameter by Id
  //Use Validation as ParseIntPipe for Convert String to Integer
  //How to use Service -> Parameter or Body(dto) ->Service , and in service do someting what ever you want
  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    //  console.log(id)
    //  return{id}
    // return this.userService.fetchUserById(id)
    const user = this.userService.fetchUserById(id)
    if(!user)  
      throw new HttpException('User not found',HttpStatus.BAD_REQUEST)
    return user
  }
}