/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from "@ioc:Adonis/Core/Route";

Route.get("/", async () => {
  return { hello: "world" };
});

// Rotas vão aqui e usando o comando no terminal node ace list:routes conseguimos acessar a estrutura de rotas da API

Route.group(() => {
  Route.get("/produtos", "ProdutosController.index");
  Route.get("/produtos/{id}", "ProdutosController.index");
  Route.post("/produtos", "ProdutosController.novo");
  Route.put("/produtos/{id}", "ProdutosController.editar");
  Route.delete("/produtos/{id}", "ProdutosController.remover");
});
