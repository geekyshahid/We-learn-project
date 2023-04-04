import "./Hero.css";

function Hero(props) {
  return(<>
    <img className="main-img" src={props.HeroImage} alt="HeroImage"/>
    
    <div className="hero-text">
      
      <h1>{props.title}</h1>
    </div>
    <div className="hero-text2">
    <h1>{props.title2} </h1>
    <p>{props.text}</p>
    <a href={props.url} className={props.btnClass}>
       {props.buttonText}
      </a>
    </div>
    </>)
}
export default Hero