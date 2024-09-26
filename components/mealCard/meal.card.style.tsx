import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 20,
    backgroundColor: '#ffff',
    marginBottom: 20
  },
  image: {
    borderRadius: 20,
    width: 'auto',
    height: 200,
    resizeMode: 'cover'
  },
  textContainer: {
    marginTop: 'auto',
    alignItems: 'center',
    backgroundColor: 'rgba(64, 64, 64, 0.8)',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  text: {
    alignSelf: 'flex-end',
    fontSize: 25,
    paddingTop: 5,
    padding: 10,
    paddingBottom: 5,
    color: '#ffff',
    fontWeight: 'bold'
  }
})
