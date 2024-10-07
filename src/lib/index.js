import axios from "axios"
import { toast } from 'svelte-sonner';
import { setCookie } from "$lib/store/cookies";

export class Api_Script{
    constructor(){
        this.backend_url = ""
        this.secret = ""
        this.user = {
            image: "https://img2.nanogames.io/avatar/505090/s?t=1727725923624",
            username: "HJsliow kslkn",
            user_id: "505090"
        }
        this.is_login = false
        this.loading = false
        this.default_wallet = {
            name: "SOL",
            icon: "https://cryptologos.cc/logos/thumbs/solana.png?v=034",
            amount: "18.12339"
        }
        this.authentication = {
            headers:{
                Authorization: `Bearer ${this.secret}`
            }
        }
        this.user_by_id = null
        this.req_status = ""
    }

    async changeProfileimg(img){  
        let path = "api/profile/change-profile-img"
        await axios.post(`${this.backend_url}/${path}`,{img},
            {
            headers:{
                Authorization: `Bearer ${this.secret}`
            }
        })
        .then((res)=>{
            this.user = res.data
            this.req_status = "success"
        })
        .catch((err)=>{
            toast.error(err.response.data.error)
            this.req_status = "failed"
        })
        return { status: this.req_status, user: this.user}
    }

    async changeUsername(username){
        this.loading = true
        let path = "api/profile/change-username"
        await axios.post(`${this.backend_url}/${path}`,{username},
            {
            headers:{
                Authorization: `Bearer ${this.secret}`
            }
        })
        .then((res)=>{
            this.user = res.data
            this.req_status = "success"
            this.loading = false
        })
        .catch((err)=>{
            toast.error(err.response.data.error)
            this.loading = false
               this.req_status = "failed"
        })
        return { status: this.req_status, user:this.user}
    }

    async profile(secret){
        this.secret = secret
        let path = "api/profile/user"
        await axios.get(`${this.backend_url}/${path}`,{
            headers:{
                Authorization: `Bearer ${this.secret}`
            }
        })
        .then((res)=>{
            this.user = res.data.user
            this.is_login = true
            this.loading = false
        })
        .catch((err)=>{
            setTimeout(()=>{
                toast.error(err.response.data.error)
            },2000)
            this.loading = false
        })
    }

    async userByID(user_id){
        let path = "api/profile/"+ user_id
        await axios.get(`${this.backend_url}/${path}`)
        .then((res)=>{
            this.user_by_id = res.data
            this.loading = false
        })
        .catch((err)=>{
            toast.error(err.response.data.error)
            this.loading = false
        })
        return {loading: this.loading, user: this.user_by_id}
    }

    async signup(email, password, referral_code){
        if(!email){
            toast.error("Email is empty")
        }
        else if(!password){
            toast.error("Password is empty") 
        }else{
            this.loading = true
            let path = "auth/signup"
            await axios.post(`${this.backend_url}/${path}`,{
                auth:{
                    email, password, referral_code
                }
            })
            .then((res)=>{
                setCookie("secret", res.data.token)
                this.user = res.data.profile
                this.is_login = true
                toast.success("Account created successfully")
                this.loading = false
            })
            .catch((err)=>{
                toast.error(err.response.data.error)
                this.loading = false
            })
        }
        return {loading: this.loading, user: this.user}
    }
    async login(email, password){
        if(!email){
            toast.error("Email is empty")
        }
        else if(!password){
            toast.error("Password is empty") 
        }
        else{
            this.loading = true
            let path = "auth/login"
            await axios.post(`${this.backend_url}/${path}`,{
                auth:{
                    email, password
                }
            })
            .then((res)=>{
                setCookie("secret", res.data.token)
                this.user = res.data.profile
                this.is_login = true
                toast.success("Logged In Successfully")
                this.loading = false
            })
            .catch((err)=>{
                toast.error(err.response.data.error)
                this.loading = false
            })
        }
        return {loading: this.loading, is_login: this.is_login}  
    }
}