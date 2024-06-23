import { Body, Controller, Post, Get, Param, Put, HttpException, HttpStatus, Delete } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./schemas/user.schema";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':username')
  async findOne(@Param('username') username: string): Promise<User | undefined> {
    const user = await this.usersService.findOne(username);
    return user;
    }

    @Put(':username')
  async updateUser(@Param('username') username: string, @Body() updateUserDto: CreateUserDto) {
    try {
      const updatedUser = await this.usersService.update(username, updateUserDto);
      return {
        message: 'User updated successfully',
        user: updatedUser,
      };
    } catch (error) {
      throw new HttpException(error.message, error.status || HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete(':username')
  async deleteUser(@Param('username') username: string) {
    try {
      const deletedUser = await this.usersService.delete(username);
      return {
        message: 'User deleted successfully',
        user: deletedUser,
      };
    } catch (error) {
      throw new HttpException(error.message, error.status || HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }


}