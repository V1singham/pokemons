import axios from "axios";
export let cancel
export const fetchApi = async(url)=>{
    try {
        
        const response = await axios.get(url,{cancelToken:new axios.CancelToken(c => cancel=c)})
        return response.data
    } catch (error) {
        
    }
}

export const fetchDetails = async(url)=>{
    try {
        const responce = await axios.get(url)
        return responce.data
    } catch (error) {
        
    }
}