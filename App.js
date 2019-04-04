import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyBiWuNKIOVeEHzGjDYxvi09fMgnrNyofpA",
  authDomain: "react-firebase-698db.firebaseapp.com",
  databaseURL: "https://react-firebase-698db.firebaseio.com",
  projectId: "react-firebase-698db",
  storageBucket: "react-firebase-698db.appspot.com",
  messagingSenderId: "947393276016"
};

firebase.initializeApp(config);

import {Container, Content, Header, Form, Input, Item, Button, Label} from 'native-base';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      email:'',
      password: '',
      loggedIn: false
    }
  }

  userSignUp = (email, password) =>{
    console.log("executing sign in user");
    try{
      if(this.state.password.length < 6){
        // alert("Please enter at least 6 characters");
        return;
      }

      firebase.auth().createUserWithEmailAndPassword(email, password);

    }
    catch(error){
      console.log(error.toString())
    }
  }

  userSignIn =(email, password)=>{
    console.log("Username and password", email, password);
    try{
      firebase.auth().signInWithEmailAndPassword(email, password).then((user)=>{
        if(user){
          this.setState({loggedIn: true})
          console.log(user);
        }
      })
    }
    catch(error){
      console.log(error);
      console.log("Error authenticating");
    }
  }

  signOut=()=>{
    firebase.auth().signOut().then(()=> {
      // Sign-out successful.
      this.setState({loggedIn: false})
    }).catch(function(error) {
      // An error happened.
    });
  }

  render() {
    if(!this.state.loggedIn){
      return (
        <Container style={styles.container}>
          <Form>
            <Item>
              <Label>Email</Label>
              <Input
                onChangeText={(email)=>{this.setState({email})}}
                autoCorrect={false}
                autoCapitalize="none"
                />
            </Item>
            <Item>
              <Label>Password</Label>
              <Input
                onChangeText={(password)=>{this.setState({password})}}
                secureTextEntry={true}
                autoCorrect={false}
                autoCapitalize="none"
                />
            </Item>
            <Button 
              style={{margin: 5}}
              full
              rounded
              success
              onPress={()=> this.userSignIn(this.state.email, this.state.password)}
              >
              <Text style={{color: 'white'}}>Login</Text>
            </Button>
            <Button 
              style={{margin: 5}}
              full
              rounded
              primary
              onPress={()=> this.userSignUp(this.state.email, this.state.password)}
            >
              <Text style={{color: 'white'}}>Sign up</Text>
            </Button>
          </Form>
          
        </Container>
      );

    }else{
      return (
        <View style={styles.loggedIn}>
          <Text>
            Welcome to my App!
          </Text>
          <Button
            style={{margin: 5, padding: 10}}
            rounded
            onPress={()=>{this.signOut()}}
          >
            <Text style={{color: 'white'}}>Log out</Text> 
          </Button>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  loggedIn:{
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 30,

  }
});
