// View.tsx

import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, View as ViewComponent} from 'react-native';
import ViewModel from './ViewModel';
import {Animal} from './Model';

export default function View(): JSX.Element {
  const [animais, setAnimais] = useState<Animal[]>([]);
  const [som, setSom] = useState<string>('');
  const viewModel = new ViewModel();

  const getSom = (id: number) => {
    setSom(viewModel.getSom(id));
  };

  useEffect(() => {
    setAnimais(viewModel.getAnimais());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {animais.map(animal => {
        return (
          <ViewComponent key={animal.id}>
            <ViewComponent style={styles.attrContainer}>
              <Text style={styles.label}>Animal:</Text>
              <Text>{animal.nome}</Text>
            </ViewComponent>
            <Button onPress={() => getSom(animal.id)} title="som" />
            <ViewComponent style={styles.divider} />
          </ViewComponent>
        );
      })}
      <Text style={styles.resultTitle}>{som}</Text>
    </>
  );
}

const styles = StyleSheet.create({
  resultTitle: {
    marginTop: 20,
    fontSize: 30,
    fontWeight: 'bold',
  },
  attrContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 3,
  },
  label: {
    fontSize: 12,
    fontWeight: 'bold',
    marginRight: 5,
  },
  divider: {
    marginVertical: 5,
    borderBottomWidth: 2,
    borderBottomColor: 'black',
  },
});
