// add items to the cart functionality

const AddToCart = ({addToCartItem}) =>{
    // take cart item one by one
    let addToCartResult = addToCartItem.map((item)=>{
        return(
            <div>
                {/* cart items img */}
                <img src={item.img} alt="cart items img" />
                {/* cart items title */}
                <h6>{item.title}</h6>
            </div>
        )
    })
    return(
        <div className="add-to-cart-wrapper">
            <div className="addp-to-cart-item">
                {/* display cart items */}
                {addToCartResult}
            </div>
        </div>
    )
}


export default AddToCart