
import { getAuth, createUserWithEmailAndPassword ,signOut,GoogleAuthProvider ,signInWithPopup, onAuthStateChanged,signInWithEmailAndPassword,updateProfile,getIdToken} from "firebase/auth";
import { useState, useEffect } from 'react';
import firebaseInitialization from './Firebase.init';


firebaseInitialization();

const useFirebase = () =>{
    const [isLoading,setIsLoading] = useState(true);
    const [users,setUser] = useState({});
    const [admin,setAdmin] = useState(false);
    const [authError, setError] = useState("");
    const [token,setToken] = useState('');
    const googleProvider = new GoogleAuthProvider();

    const auth = getAuth();
    const singnInUser = (email,password) =>{
      setIsLoading(true);
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
          setError("")
          })
          .catch((error) => {
            setError(error.message)
          })
          .finally(()=>setIsLoading(false))
    }

    const signInWithGoogle = () =>{
      setIsLoading(true);
      signInWithPopup(auth, googleProvider)
        .then((result) => {
          const user = result.user;
          saveUser(user.email,user.displayName,"PUT")
        }).catch((error) => {
          setError(error.message)
        })
        .finally(()=>setIsLoading(false))
    }

    const registerUser = (email,password,name) =>{
      setIsLoading(true);
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
          setError("");
          const newUser = {email, displayName:name};
          //send name to firebase after creation
          setUser(newUser)
          //save the user on database
          saveUser(email,name,"POST")
          updateProfile(auth.currentUser, {
            displayName: name
          }).then(() => {
          }).catch((error) => {
          });
          })
          .catch((error) => {
            setError(error.message)
          })
          .finally(()=>setIsLoading(false))
    }
  //save user on database
  const saveUser = (email,displayname,method)=>{
    const user = {email, displayname};
    fetch('https://calm-anchorage-79518.herokuapp.com/users',{
      method:method,
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data =>data)
  }
 //observe user state
    useEffect(()=>{ 
       const unsubscribe =  onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                getIdToken(user)
                .then(idToken=>{
                  setToken(idToken)
                }) 
            } else {
                setUser({})
            }
            setIsLoading(false)
          });
          return () => unsubscribe;
    },[])


    //admin panel login
    useEffect(()=>{
      const url = `https://calm-anchorage-79518.herokuapp.com/users/${users.email}`;
      fetch(url)
      .then(res=>res.json())
      .then(data => setAdmin(data.admin))

    },[users])


    const logOut = () =>{
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally(()=>setIsLoading(false))
    }
    return{
        users,
        isLoading,
        token,
        authError ,
        admin,
        registerUser,
        logOut,
        singnInUser,
        signInWithGoogle
    }

}
export default useFirebase;