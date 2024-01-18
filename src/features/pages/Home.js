import Navbar from "../navbar/Navbar";
import Productlist from "../product-list/componets/Product-list"

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