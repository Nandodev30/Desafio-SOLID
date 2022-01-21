import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const user = this.usersRepository.findById(user_id);

    if (user === undefined) {
      throw new Error("Mensagem de Erro")
    }

    this.usersRepository.turnAdmin(user);
        
    return user;
  }
}

export { TurnUserAdminUseCase };
