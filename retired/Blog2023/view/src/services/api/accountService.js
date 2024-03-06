import axios from 'axios'

/* Environment varaiables */ 
const API       = import.meta.env.VITE_APP_API
const WEBUI     = import.meta.env.VITE_APP_WEBUI

class accountService{

    static async checkLoginStatus(){
        const path = API + "/account/login"
        const data = {
            "username": null,
            "password": null
        }
        try{
            const response = await axios.post(path, data, { withCredentials: true })
            if (response.data.status === "ok"){
                return "success"
            }
            else {
                console.log("error loging in:", response.data.error)
                return response.data.error
            }
        }
        catch (error) {
            console.log(error)
            return "Connection Failure"
        }   
    }
    
    static async login(user, pass){
        const username = user
        const password = pass
        const path = API + "/account/login"
        const data = {
            "username": username,
            "password": password
        }
        try{
            const response = await axios.post(path, data, { withCredentials: true })
            if (response.data.status === "ok"){
                return "success"
            }
            else {
                return response.data.error
            }
        }
        catch (error) {
            return "Connection Failure"
        }   
    }

    static async logout(){
        const path = API + "/account/logout"
        const data = {}
        try{
            const response = await axios.post(path, data, { withCredentials: true })
            if (response.data.status === "ok"){
                return "success"
            }
            else {
                return response.data.error
            }
            this.checkLoginStatus()
        }
        catch (error) {
            return "Connection Failure"
        }   
    }

    static test(){
        console.log("accountServices working")
        return "success"
    }

}

export default accountService;
