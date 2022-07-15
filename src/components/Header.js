function Header(props){
 return(
    <h1>{props.title}</h1>
 )   
}

Header.defaultProps = {
    title: "insert title here"
};

export default Header;