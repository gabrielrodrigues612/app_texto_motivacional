import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Mensagem from '../models/Mensagem';

export default class MensagemController{

  public async readOne(req : Request, res: Response){
    //Função que faz com que o resultado seja um número maior ou igual a 1
    //(porém o resultado gerado pelo random pode ser 0, ocasionando em uma multiplicação igual a 0)
    function randomId(num: number){
      return Math.random() * num
    }

    //Aqui, conto a quantidade de mensagens que existem no banco de dados
    const length = await getRepository(Mensagem).count()

    //Por fim, faço um arredondamento para baixo e somo 1, pois se o número gerado
    //anteriormente for 0, ele receberá o valor de 1 (isso não influencia no último número)
    const id = Math.floor(randomId(length) + 1)

    return res.json(
      await getRepository(Mensagem).find({
        where: {
          id
        }
      })
    );
  }
}
