function generateOrder(){
    let order = {
        listId : faker.random.uuid(),
        garagedoor : generateGDOOR()
    }
    return order;
}

function generateOrderList() {
    let orders= [];
    const ORDERS_COUNT = 100;
    for (let i = 0; i < ORDERS_COUNT; i++) {
        orders[i] = generateOrder()
    }
    return orders;
}

console.log(generateOrderList());