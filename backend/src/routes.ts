import { Router } from "express";

import { save, load } from "./fileManipulation";
import { addUser, getAll } from "./controllers";

const router = Router();


router.get("/", (req, res) => {

    return res.status(200).send({ message: "Servidor rodando na porta 5000" })

});

router.post("/users", (req, res) => {
    addUser(req, res);
});

router.get("/users", (req, res) => {
    getAll(req, res);
});



router.delete("/users", (req, res) => {

    return res.status(200).send({ message: "TODO" })

});

router.patch("/users", (req, res) => {

    return res.status(200).send({ message: "TODO" })

});





export default router;