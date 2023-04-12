import { addToDb } from "./h";


const addToStorage = (id) => {
    let data
    const oldData = JSON.parse(localStorage.getItem("cart")) || [];
  
  
  
    const isNewItem = !oldData.find((item) => item === id);
  
    if (isNewItem) {
      addToDb(id)
      const newData = [...oldData, { id }];
     data = localStorage.setItem("cart", JSON.stringify(newData));
    }
  return data
}



const getStorageData =()=>{
    let data = localStorage.getItem('cart')
    const newData = JSON.parse(data)
    return newData
}



    export{addToStorage, getStorageData}