import { httpClient } from './httpClient';

const signUp = async (user : {id : string, password : string}) => {
    return httpClient.post('register', user)
      .then((res : { data: {message : string} }) => res.data )
      .catch((error : Error) => {
        console.error('Erreur lors de l\'inscription:', error);
        throw error;
      });
  };

const login = async (user : {id : string, password : string}) => {
    return httpClient.post('login', user)
      .then((res : { data: {token : string} }) => res.data )
      .catch((error : Error) => {
        console.error('Erreur lors de la connexion:', error);
        throw error;
      });
  };

export { signUp, login };