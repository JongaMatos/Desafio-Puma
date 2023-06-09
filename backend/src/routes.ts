import { Router, Request, Response } from "express";

import { addUser, getAll, removeOne, toggle_star } from "./controllers";

const router = Router();

const file="data.txt"

router.get("/", (req: Request, res: Response) => {

    return res.status(200).send({ message: "Servidor rodando na porta 5000" })

});

router.post("/users", (req: Request, res: Response) => {
    addUser(req, res,file);
});

router.get("/users", (req: Request, res: Response) => {
    getAll(req, res,file);
});

router.delete("/users/:username", (req: Request, res: Response) => {
    removeOne(req, res,file);
});

router.patch("/users/:username/toggle-star", (req: Request, res: Response) => {
    toggle_star(req, res,file);
});



export default router;