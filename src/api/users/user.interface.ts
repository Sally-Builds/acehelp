import {Document} from 'mongoose'
import {Gender} from '../../helpers/constants'

export interface IUser extends Document{
  firstname: string;
  surname: string;
  phone: string;
  password: string;
  email: string;
  address: string;
  gender: Gender;
  date_of_birth: Date;
  uid: string;
}

// export class UserValidatorDTO implements  Omit<IUser, 'uid'> {
//   @IsString()
//   firstname!: string;
//   @IsString()
//   surname!: string;
//   @IsString()
//   phone!: string;
//   @IsString()
//   address!: string;
//   @IsEnum(Gender)
//   gender!: Gender;
//   @IsDate()
//   date_of_birth!: Date;
// }
