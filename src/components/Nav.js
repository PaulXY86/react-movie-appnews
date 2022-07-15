function Nav(props) {
    return (
        <nav> 
            <h3>{props.Logo} </h3>
            <ul>
                <li>{props.About} </li>
                <li>{props.Shop} </li>
            </ul>
        </nav>
    )
}
 
 

export default Nav;
