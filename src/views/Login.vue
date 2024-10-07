<template>
    <div class="flex flex-column align-items-center justify-content-center gap-4 h-15rem">
      <h2>Connexion</h2>
      <div class="flex flex-column gap-3">
        <InputText v-model="idUser" placeholder="Identifiant"/>
        <Password v-model="password" placeholder="Mot de passe"/>
      </div>
      <div class="flex gap-2">
        <Button label="Connexion" @click="loginIn()"  />
        <Button label="Création" @click="registerUser()" />
      </div>
      <p>{{ msg }}</p>
    </div>
  </template>
  
  <script setup lang="ts">  
  import InputText from 'primevue/inputtext';
  import Password from 'primevue/password';
  import Button from 'primevue/button';
  import { signUp, login } from '../services/userServices';
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  const idUser = ref('');
  const password = ref('');
  const msg = ref('');
  
  const registerUser = async () => {
    try
    {
      await signUp({id: idUser.value, password: password.value});
      msg.value = 'Inscription reussie';
    }
    catch (error)
    {
      console.log(error);
    }
  };
  
  const loginIn = async () => {
      login({id: idUser.value, password: password.value})
        .then((res) => {
            if (res.token) {
                localStorage.setItem("token", JSON.stringify(res.token));
                console.log(res.token);               
                msg.value = 'Connexion reussie';
                router.push('/home');
            }
            return res.token;
        }).catch((error) => {
            msg.value = 'Connexion echouée';
        });
  }
  </script>