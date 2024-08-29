import express from "express";
import livros from "./livrosRoutes.js";
import autores from "./autoresRoutes.js";

const routes = (app) => {
    app.use(express.json());

    app.route("/").get((req, res) => res.status(200).send("Curso de Node.js"));
    
    app.use(livros);
    app.use(autores);
};

export default routes;
