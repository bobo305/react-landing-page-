import React from "react";

const Card =() => {
    return(
        <div class="card" style= {{width: "18rem"}}>
            <img class="card-img-top" src="https://www.southeasterninsur.com/wp-content/themes/erange/images/placeholder/700x400.gif" alt="Card image cap"/>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <button type="submit" class="btn btn-primary float-end">Find Out More</button>
  
            </div>
          </div>

    )
}
export default Card