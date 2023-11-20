import Model from './Model';

export default class ViewModel {
  private model = Model;

  getAnimais = () => {
    return this.model.animais;
  };

  getSom = (id: number) => {
    const animal = this.model.animais.find(a => {
      return a.id === id;
    });
    if (!animal) {
      return 'Animal não enconmtrado';
    }
    const som = this.model.sons.find(s => {
      return s.id === animal.som;
    });
    if (!som) {
      return 'Animal sem som';
    }
    return animal.nome + ' faz ' + som.som;
  };
}
