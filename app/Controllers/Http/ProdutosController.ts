// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ProdutosController {
  static produtos = [
    {
      nome: "Pão",
      preco: 1.0,
    },
  ];

  public async index({ params }) {
    if (params.id) {
      return ProdutosController.produtos[params.id];
    }
    return ProdutosController.produtos;
  }
  public async novo({ request }) {
    ProdutosController.produtos.push(request.body());
  }
  public async editar({ request }) {
    const { id } = request.params();
    ProdutosController.produtos[id] = request.body();
  }
  public async remover({ params }) {
    ProdutosController.produtos.splice(params.id, 1);
  }
}
