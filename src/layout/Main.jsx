import { Outlet,useLoaderData } from "react-router-dom";

// assets
import wave from "../assets/wave.svg";

// components
import Nav from "../components/Nav";

const Main=()=>{
<div className="layout">
    <Nav />
    <main>
        <Outlet />
    </main>
    <img src={wave} alt="wave image" />
</div>
}

export default Main