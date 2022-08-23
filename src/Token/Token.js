import { useEffect } from "react";

const Token = () => {
    
    useEffect(() => {
        fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token')
         .then((response)=>response.json()) 
        .then((data)=> { 
            localStorage.setItem('token',data.token);
            console.log(data.token); }) 
    }, []);

    return (
        <div>
           
        </div>
    )
}
export default Token;

