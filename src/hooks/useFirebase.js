import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from 'react';
import initializeAuthentication from '../Firebase/firebase.init';

initializeAuthentication();
const useFirebase = () => {
    const [formEmail, setFormEmail] = useState('');
    const [formPass, setFormPass] = useState('');
    const [formName, setFormName] = useState('');
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();

    const emailChange = (e) => {
        setFormEmail(e.target.value);
    }
    const passChange = (e) => {
        setFormPass(e.target.value);
    }
    const nameChange = (e) => {
        setFormName(e.target.value);
    }

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const updateName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {
            // using window.location to show username   
            window.location = "/";
        })
    }

    const createUserWithEmail = (formEmail, formPass, formName) => {
        createUserWithEmailAndPassword(auth, formEmail, formPass)
            .then(result => {
                updateName(formName)
                setError('');
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false));
    }
    const signUserWithEmail = (formEmail, formPass, history, location) => {
        if (formEmail && formEmail) {
            signInWithEmailAndPassword(auth, formEmail, formPass)
                .then(result => {
                    const redirect_uri = location.state?.from || "/home";
                    history.push(redirect_uri);
                    setError('')
                    setUser(result.user);

                })
                .catch(error => {
                    setError(error.message)
                })
                .finally(() => setIsLoading(false));
        } else {
            setError("please enter your email and password")
        }
    }
    const signInUsingGoogle = (history, location) => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setError('');
                setUser(result.user);
                const redirect_uri = location.state?.from || "/home";
                history.push(redirect_uri);
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false))
    };
    const signInUsingGithub = (history, location) => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                setError('');
                setUser(result.user);
                const redirect_uri = location.state?.from || "/home";
                history.push(redirect_uri);

            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false))
    };

    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .finally(() => setIsLoading(true))
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        })
    }, [])
    return {
        user,
        error,
        setError,
        isLoading,
        emailChange,
        passChange,
        nameChange,
        formEmail,
        formPass,
        formName,
        logOut,
        signInUsingGoogle,
        signInUsingGithub,
        createUserWithEmail,
        signUserWithEmail
    }
}
export default useFirebase;