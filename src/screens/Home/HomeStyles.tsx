import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 50
  },
  image: {
    width: 300,
    resizeMode: 'contain', 
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
  formText: {
    fontSize: 20,
  },
  formInput: {
    borderWidth: 1,
    paddingVertical: 2,
    paddingHorizontal: 5,
  },
  formLines: {
    marginVertical: 10
  }
});