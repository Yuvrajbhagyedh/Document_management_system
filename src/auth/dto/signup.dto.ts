import { IsEmail, IsEnum, IsNotEmpty, MinLength } from 'class-validator';
import { Role } from '../../common/enums/role.enum';

export class SignupDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @MinLength(6, { message: 'password must be at least 6 characters long' })
  password: string;

  @IsEnum(Role, { message: 'role must be either DOCTOR or PATIENT' })
  role: Role;
}
