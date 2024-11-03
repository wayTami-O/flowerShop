import FlowersTable from "@/components/Flowers/FlowersTable";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

function WishList() {
    return (
        <>
            <Header />
            <h1 className="px-86 pt-30 font-mons text-64 font-bold text-rose">Избранное</h1>
            <FlowersTable />
            <Footer />
        </>
    );
}

export default WishList;