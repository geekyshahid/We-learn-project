import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HomeImg from "../assets/mainimg.png"
import Footer from "../components/Footer";
import Card from "../components/Card";
function Home(){
  return(
    <>
    <Navbar/>
    <Hero 
    cName=".hero" 
    HeroImage={HomeImg}
    title= "World Has Enough Engineers"
    title2= "Be More Than an Engineer"
    buttonText="View Courses"
    url="/"
    btnClass="show"
    />
    <Card />
    <Footer/>
    
    </>
  );
}
export default Home;
