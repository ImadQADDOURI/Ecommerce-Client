export const getProducts = ()=>async(dispatch)=>{
try {
    
    const data = await fetch("localhost:8005/getproducts",{method:"GET",headers:{"Content-Type":"application/json"}  });

const res = await data.json();
console.log(res);
dispatch({type:"SUCCESS",payload:res});


} catch (error) {
    dispatch({type:"FAIL",payload:error.response});
}

}