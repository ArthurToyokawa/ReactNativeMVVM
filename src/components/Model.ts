// Model.ts
export type Animal = {
  id: number;
  nome: string;
  som: number;
};

export type Som = {
  id: number;
  som: string;
};

const model: {animais: Animal[]; sons: Som[]} = {
  animais: [
    {
      id: 1,
      nome: 'cachorro',
      som: 1,
    },
    {
      id: 2,
      nome: 'gato',
      som: 2,
    },
    {
      id: 3,
      nome: 'lobo',
      som: 1,
    },
    {
      id: 4,
      nome: 'vaca',
      som: 3,
    },
  ],
  sons: [
    {id: 1, som: 'au au'},
    {id: 2, som: 'miau'},
    {id: 3, som: 'moo'},
  ],
};

export default model;
