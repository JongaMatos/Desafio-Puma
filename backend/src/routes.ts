import { Router, Request, Response } from "express";

import { addUser, getAll, removeOne, toggle_star } from "./controllers";

const router = Router();

const file = "data.txt"

router.get("/", (req, res) => {

    return res.status(200).send({ message: "Servidor rodando na porta 5000" })

});

router.post("/users", (req, res) => {
    const { body } = req;

    const result = addUser(body, file);
    return res.status(result.status).send(result.send);

});

router.get("/users", (req, res) => {
    const result = getAll(file);
    return res.status(result.status).send(result.send);
});

router.delete("/users/:username", (req, res) => {
    const { username } = req.params;
    const result = removeOne(username, file);
    return res.status(result.status).send(result.send);

});

router.patch("/users/:username/toggle-star", (req, res) => {
    const { username } = req.params;

    const result = toggle_star(username, file);
    return res.status(result.status).send(result.send);

});



export default router;