import { response } from "express";
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {


  }

  execute({user_id}) {
    const users = this.usersRepository.list();

    const IsAdmin = this.usersRepository.findById(user_id);

    if (IsAdmin === undefined) {
      throw new Error("Mensagem de Erro")
    }
   
    if (IsAdmin.admin === false) {
      throw new Error("This user is not an administrator")
    }
    return users;
  }
}

export { ListAllUsersUseCase };
