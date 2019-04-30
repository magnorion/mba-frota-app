import { ListaCarro } from './ListaCarro';

export class Travel {
  constructor(
    public carroViagem: ListaCarro,
    public distancia: number,
    public preco: number
  ) {}
}
