
export const authGuard = (to, from, next) => {
    const token = localStorage.getItem('token');
  
    if (token) {
      next(); // L'utilisateur est authentifié, continuez
    } else {
      next('/'); // Redirigez vers la page de connexion
    }
  };
  