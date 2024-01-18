import Navbar from "../navbar/Navbar";
import Productlist from "../product-list/Product-list"

function Home() {
    return ( 
        <div>
            <Navbar>
                <Productlist></Productlist>
            </Navbar>
        </div>
     );
}

export default Home;