import getUserData from "../users/userData"


export default function checkLogin(state){
    let isLogged = 0;
    const userData = getUserData();
    let isMatche = false;
    
    userData.forEach((user, index) => {
        if(user.username === state.username && user.password === state.password){
            isMatche = true;
        }
    });
    
    return isMatche;
}