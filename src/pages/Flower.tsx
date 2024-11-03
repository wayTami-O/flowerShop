import Comments from "@/components/CardFlower/Commetns";
import CardFlower from "@/components/CardFlower/Flower";
import Recomendation from "@/components/CardFlower/RecomendFlowers";
import Footer from "@/components/Footer";
import Header from "@/components/Header";


function Flower() {
    return (
        <>
            <Header />
            <CardFlower />
            <Comments />
            <Recomendation />
            <Footer />
        </>
    );
}

export default Flower;