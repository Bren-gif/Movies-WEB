export default function Pelicula(props) {
    return (
        <div className="movie-item-style-2">
            <img src={require(`../../../public/images/uploads/${props.image}.jpg`)} alt="" />
            <div className="mv-item-infor">
                <h6>
                    <a href="moviesingle.html">
                        {props.name}
                        <span>({props.age})</span></a>
                </h6>
                <p className="rate">
                    <i className="ion-android-star"></i>
                    <span>{props.punctuation}</span> /10
                    </p>
                <p className="describe">{props.children}</p>
                <p className="run-time"> Tiempo de ejecución: {props.runtime}’    .     <span>MMPA: {props.protection} </span>    .     <span>Liberar: {props.date}</span></p>
                <p>Director: 
                    <a href="#">{props.director}</a>
                    <a href="#">{props.director2}</a>
                </p>
                <p>Empieza: 
                    <a href="#">{props.star1}</a>
                    <a href="#">{props.star2}</a>
                    <a href="#">{props.star3}</a>
                </p>
            </div>
        </div>
    );
}