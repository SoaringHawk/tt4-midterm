import expressObj from 'express';
import morganObj  from 'morgan';

const app = expressObj();
app.use( morganObj( 'dev' ) );

//Question 2
var products = [
    { id: "c1", name: "Laptop", price: 1000, inventory: 10, category: "Electronics" },
    { id: "c2", name: "Smartphone", price: 800, inventory: 5, category: "Electronics" },
    { id: "c3", name: "Desk", price: 150, inventory: 0, category: "Furniture" },
    { id: "c4", name: "Chair", price: 75, inventory: 20, category: "Furniture" },
    { id: "c5", name: "Headphones", price: 200, inventory: 100, category: "Accessories" }
];

var orders = [
    { orderId: 1, productIds: ["c1"] },
    { orderId: 2, productIds: ["c2"] },
    { orderId: 3, productIds: ["c4", "c5"] }
];

function getIdx ( item_id ) {
    let item_count = products.length;
    let item_map; 
  

    for (let i = 0; i < item_count; i++ ) {
      item_map = products[ i ];
      if ( item_map.id === item_id ) {
        return i;
      }
    }
    return null;
  }

function isIdInOrder(item_id){
    for(let i = 0; i < orders.length; i++){
        if (orders[i].productIds.includes(item_id)){
            return true;
        }
    }
    return false;
}

function checkInventory(item_id){
    for(let i=0; i< products.length; i++){
        if(products[i].id === item_id){
            
            return products[i].inventory
            
        }
    }
    return null;
}

app.delete('/:id', function(request, response){
    const item_id = request.params.id;
    const item_index_in_array = getIdx(item_id);

    
    if(item_index_in_array !== null){
        if(isIdInOrder(item_id)){
            return response.status(409).send('You cannot delete this as it is already in order');
        }
        else if(checkInventory(item_id) !== 0){
            return response.status(409).send('You cannot delete this as it is in stock')
        }
        else{
            products.splice(item_index_in_array,1)
            return response.status(200).end();
        }
        
    }
    else{
        return response.status(404).send('This item does not exist')
    }

})
const server = app.listen( 3000, '127.0.0.1', function () {
    console.log( 'HTTP server listening on 127.0.0.1:3000' );
  });