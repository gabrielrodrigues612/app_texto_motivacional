import { Router } from "express";
import MensagensController from "../controllers/mensagens.controller";
import MensagemController from "../controllers/mensagem.controller"

const messagesRouter = Router();

const mensagensController = new MensagensController();
const mensagemController = new MensagemController
//essa Gabriel faz
//fiz
messagesRouter
  .get("/", mensagemController.readOne)
  .get("/all", mensagensController.readAll)

export default messagesRouter;
