export default function Childcom(props){
    return(
        <div>
            <h3>Hello React I'm Child</h3>
                {
                    props.setfun("My Name is Bob")
                }
        </div>
        
    );
}