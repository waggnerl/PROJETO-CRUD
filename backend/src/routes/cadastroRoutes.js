import { Router } from "express";
import cadastroController from "../controllers/CadastroController";

const router = new Router();

router.post("/",  cadastroController.store);
router.get("/",  cadastroController.index);
router.get("/:id",  cadastroController.show); 
router.delete("/:id",  cadastroController.delete);
router.put("/:id", cadastroController.update);


export default router;
