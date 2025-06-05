import { Outlet } from "react-router-dom";

function AboutPage() {
    return (
        <>
            <h4>회사정보임</h4>
            <Outlet />
        </>
    )
}

export default AboutPage;