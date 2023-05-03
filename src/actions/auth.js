import * as api from '../api/index.js';
export const signin =async (formData)=>{
try {
    const {data}=await api.signIn(formData);
    localStorage.setItem('profile',JSON.stringify(data));
    return data;
    } catch (error) {
        console.log(error);
    }
}