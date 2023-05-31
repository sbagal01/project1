import axios from 'axios';

export function Myinterceptor() {
    axios.interceptors.request.use((req)=>{
        
        req.headers.authorization="my secret token";
        return req;
    });
}
export function myInterceptor2(){
    axios.interceptors.request.use((req)=>{
        req.meta=req.meta||{};
        req.meta.requestStartedAt=new Date().getTime();
        return req;
    })
}
export function myInterceptor3(){
    axios.interceptors.response.use((res)=>{
        res.durationInMs=new Date().getTime()-res.config.meta.requestStartedAt;
        res.currentTime=new Date().toLocaleDateString();
        return res;
    },)
}