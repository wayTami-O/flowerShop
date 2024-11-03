import Filter from "../components/Flowers/Fliter";
import Footer from "../components/Footer";
import Header from "../components/Header";
import FlowersTable from "../components/Flowers/FlowersTable";

function Flowers() {
    return (
        <>
            <Header />
            <Filter />
            <FlowersTable />
            <Footer />
        </>
    );
}

export default Flowers;