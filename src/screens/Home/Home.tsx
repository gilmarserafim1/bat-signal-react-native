import React, { useState } from 'react';
import { View, Image, Pressable, Text, TextInput } from 'react-native';

import { styles } from './HomeStyles';


const Home = () => {

  const [logoVisible, setLogoVisible] = useState(true);
  const [formVisible, setFormVisible] = useState(false);

  function changeState() {
    setLogoVisible(value => !value);
    setFormVisible(value => !value);
  }

  return (
    <View style={styles.container}>
      
      { logoVisible ? (
        <View>

          <Image
            style={styles.image}
            source={ require('../../../assets/bat-signal-logo.png')} />

          <Pressable
            onPress={ changeState }
            style={styles.button}
            android_ripple={{ color: 'lightgrey' }} >
              <Text style={styles.buttonText}>ACTIVATE BAT SIGNAL</Text>
          </Pressable>

        </View>
      ) : null }

      { formVisible ? (
        <View>
          
          <View style={styles.formLines}>
            <Text style={styles.formText}>Nome:</Text>
            <TextInput 
              style={styles.formInput}
              placeholder='Digite seu nome'>
            </TextInput>
          </View>
          
          <View style={styles.formLines}>
            <Text style={styles.formText}>Telefone:</Text>
            <TextInput 
              style={styles.formInput} 
              placeholder='Digite seu telefone'>
            </TextInput>
          </View>

          <View style={styles.formLines}>
            <Text style={styles.formText}>Localização:</Text>
            <TextInput 
              style={styles.formInput}
              placeholder='Digite sua localização'>
            </TextInput>
          </View>

          <View style={styles.formLines}>
            <Text style={styles.formText}>Observações:</Text>
            <TextInput
              style={styles.formInput}
              numberOfLines={4}
              placeholder='Observações...'>
            </TextInput>
          </View>

          <View style={styles.formLines}>
            <Pressable
              onPress={ changeState }
              style={styles.button}
              android_ripple={{ color: 'lightgrey' }} >
                <Text style={styles.buttonText}>BACK</Text>
            </Pressable>
          </View>

      </View>
    ) : null }

    </View>
  );
}

export default Home;