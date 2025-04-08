import React from "react";
import Contador from "./contador";

const Home = () => {
    return (
        <div className="text-center">
            <Contador start={0} alertTime={10} />
        </div>
    );
};

export default Home;