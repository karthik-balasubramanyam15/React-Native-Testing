import { View, Text, TextInput, Button } from 'react-native'
import 'react-native';
import React from 'react';

function Form(): JSX.Element {
    return (
        <View>
            <Text>Perfil</Text>

            <TextInput
                testID="input-name"
                placeholder="Nome"
                autoCorrect={false}
                value="Jeferson"
            />
            <TextInput
                testID="input-surname"
                placeholder="Sobrenome"
                autoCorrect={false}
                value="Lucas"
            />

            <Button title="Salvar" onPress={() => { }} />
        </View>
    )
}

export default Form;

