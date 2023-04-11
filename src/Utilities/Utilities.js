

const addToStorage = (id) => {
    let data
    const oldData = JSON.parse(localStorage.getItem("cart")) || [];
    console.log(oldData);
  
  
    const isNewItem = !oldData.find((item) => item.id === id);
  
    if (isNewItem) {
      
      const newData = [...oldData, { id }];
     data = localStorage.setItem("cart", JSON.stringify(newData));
    }
  return data
}

    export{addToStorage}