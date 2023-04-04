import "./CardStyles.css"
import CardData from "./CardData"
import Card1 from "../assets/content.png"
import Card2 from "../assets/notes.png"
import Card3 from "../assets/faculty.png"
import Card4 from "../assets/C.png"
import Card5 from "../assets/ML.png"
import Card6 from "../assets/DBMS.png"
function Card () {
    return(
        <div>
        <div className="menu-card">
            <p>Why WeLearn ?</p>
            <h1>Making learning easier and more convenient for you.</h1>
            
            <div className="Coursecard">
                <CardData
                image={Card1}
                heading="Hand-Picked Content"
                text="Get access to hand-picked content for all of your Engineering subjects
                 that will help you in your academics and in your semester exams."
                />
                <CardData
                image={Card2}
                heading="Learn From the Best"
                text="WeLearn provides you the best resources available till date 
                        on video platform like YouTube."

                />
                <CardData
                image={Card3}
                heading="Recommended by Faculties"
                text="Get the best of the resources available and the best part is,
                     all the courses are verified by our respected faculties."
                />
            </div>
        </div>
        <div className="menu-card">
            <h1>What would you like to Learn ?</h1>
            
            <div className="Coursecard">
                <CardData
                image={Card4}
                heading="Programming for Problem Solving"
                text="C is a powerful general-purpose programming language. It can be used to develop software like operating systems, databases, compilers, and so on. C programming is an excellent language to learn to program for beginners."
                />
                <CardData
                image={Card5}
                heading="Learn Machine Learning"
                text="Machine learning is a branch of artificial intelligence (AI) 
                    and computer science which focuses on the use of data and algorithms 
                    to imitate the way that humans learn, gradually improving its accuracy."

                />
                <CardData
                image={Card6}
                heading="Database Management System"
                text="A database management system (DBMS) is system software for creating and managing databases.
                    A DBMS makes it possible for end users to create, protect, read, update and delete data in a database."
                />
            </div>
        </div>
        </div>
    )
}

export default Card;