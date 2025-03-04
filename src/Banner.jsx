
export default function Banner(props) {
    return (
        <div className="Banner">
            <img src={props.netflixBanner} alt="" />
            <p>{props.description}</p>
        </div>
    );
}

