export class ListaCarro {
  constructor(
    public id: string,
    public placa: string,
    public cor: string = '',
    public longitude: string,
    public latitude: string,
    public status: string = ''
  ) {}
}
