// A mock function to mimic making an async request for data
export function fetchCount(amount = 1) {
  return new Promise(async(resolve) =>{
    const response =await fetch('https://e-commerceapi-tv21.onrender.com/')
   const data=await response.json();
   resolve({data});
  }
  );
}
