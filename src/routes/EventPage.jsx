import { Outlet } from "react-router-dom";

function EventPage() {
    return (
        <>
            <div style={{ textAlign: "center" }}>
                <h4>오늘의 이벤트</h4>
                <Outlet />
            </div>
        </>
    )
}

export default EventPage;