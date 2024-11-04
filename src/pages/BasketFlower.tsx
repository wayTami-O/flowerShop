import BasketComponent from "@/components/BasketPage/BasketComponent";
import PayMethods from "@/components/BasketPage/PayMethods";
import { useState } from "react";

type TBasket = "buy" | "card";

function BasketFlower() {

    const [state,setState] = useState<TBasket>("buy");


    const handleSwitch = (type: TBasket) => {
        switch (type) {
            case "buy":
                return "buy";
            case "card":
                return "card";
        }
    }

    return (
        <>
            <BasketComponent />
            <PayMethods />
            {handleSwitch(state)}
            <button onClick={()=>setState(prev=>prev == "buy" ? "card" : "buy")}>change</button>
        </>
    );
}

export default BasketFlower;