import Card from "./Card"

export default function Cards({courseses})
{
    console.log("inside the card");
    
    console.log(courseses);
    console.log("inside the card");
    
    return(
        <div className="Card"> 
            {
                courseses.map((SingleCourse)=>
                {
                    return(
                        <Card scourse={SingleCourse} key={SingleCourse.id}></Card>
                    )
                })
            }
        </div>
    )
}