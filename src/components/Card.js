export default function Card({scourse})
{
   
    console.log(scourse);
    
    const imageUrl = "https://via.placeholder.com/150"; // Placeholder if image is missing

    return(
        <div>
            <div>
                 <img src={imageUrl} alt="" />
            </div>
            <div>
                <p>{scourse.title}</p>
                <p>{scourse.description}</p>
            </div>
            
        </div>
    )
}