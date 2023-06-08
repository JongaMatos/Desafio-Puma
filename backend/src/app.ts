import * as express from "express";
import router from "./routes";


const app = express();

const PORT = process.env.APP_PORT || 5000;



app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", router);


app.listen(PORT, () => {
    console.log(`O servidor está rodando na porta ${PORT}`);
});
