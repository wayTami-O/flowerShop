import Comments from "@/components/CardFlower/Commetns";
import CardFlower from "@/components/CardFlower/Flower";
import Recomendation from "@/components/CardFlower/RecomendFlowers";


function Flower() {
    return (
        <>
            <CardFlower />
            <Comments />
            <Recomendation />
        </>
    );
}

export default Flower;