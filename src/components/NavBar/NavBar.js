import CartWidget from "../CartWidget/CartWidget"
const NavBar = () => {
return(
    <nav>
        <h3>Ecommerce</h3>
        <div>
            <button>Celulares</button>
            <button>Tablet</button>
            <button>Notebooks</button>
            <CartWidget/>
        </div>
        </nav>
)
} 

export default NavBar