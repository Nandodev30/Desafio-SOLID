import { v4 as uuidV4 } from "uuid";
import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    const user = new User ();

    Object.assign(user, { 
      name,
      email,
      created_at: new Date (),
      updated_at: new Date (),
  });
      this.users.push(user);

      return user

    };

  findById(id: string): User  {
    const user = this.users.find((user) => user.id === id);
    return user!;
  };


  findByEmail(email: string): User {
    const user = this.users.find((user) => user.email === email);
    return user!;
  };

  turnAdmin(receivedUser: User): User {
    const Index = this.users.findIndex((Index) => Index.id === receivedUser.id )

    this.users[Index].admin = true;

    this.users[Index].updated_at = new Date;

      return this.users[Index];

  }

  list(): User[] {
    return this.users;
  }
}

export { UsersRepository };
