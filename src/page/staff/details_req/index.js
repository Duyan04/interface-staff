import { NavLink } from "react-router-dom";

function Detail_Req() {
    return (
        <>
            <main className="main-content">
                <h1>Apartment management in the United States</h1>

                <div className="details-form">
                    <a href="list-repair-requirements.html">
                        <button className="back-btn">
                            <span><NavLink to="/staff/assignment/request_repair">←</NavLink></span>
                        </button>
                    </a>
                    <h2>REPAIR REQUEST DETAIL</h2>
                    <form action="#">
                        <label htmlFor="request-id">Request ID</label>
                        <input type="text" id="request-id" defaultValue="RQ001" readOnly="" />
                        <label htmlFor="account">Account</label>
                        <input type="text" id="account" defaultValue="AC001" readOnly="" />
                        <label htmlFor="request-date">Request date</label>
                        <input type="date" id="request-date" defaultValue="2024-01-01" />
                        <label htmlFor="expect-date">Expect date</label>
                        <input type="date" id="expect-date" defaultValue="2024-10-01" />
                        <label htmlFor="maintenance-equipment">Maintenance equipment</label>
                        <select id="maintenance-equipment">
                            <option selected="">Air conditioner</option>
                            <option>Heating</option>
                            <option>Lighting</option>
                        </select>
                        <label htmlFor="building">Building</label>
                        <input type="text" id="building" defaultValue="A" />
                        <label htmlFor="apartment">Apartment</label>
                        <input type="text" id="apartment" defaultValue={123} />
                        <label htmlFor="repair-content">Repair content</label>
                        <textarea id="repair-content" defaultValue={"..."} />
                        <label htmlFor="image-video">Image/Video</label>
                        <input type="file" id="image-video" accept="image/*,video/*" />
                        <hr />
                        <label htmlFor="operating-status">Operating status</label>
                        <select id="operating-status">
                            <option>Normal</option>
                            <option>Ongoing</option>
                            <option>Complete</option>
                        </select>
                        <label htmlFor="maintenance-status">Maintenance status</label>
                        <select id="maintenance-status">
                            <option>Ongoing</option>
                            <option>Complete</option>
                            <option>Pending</option>
                        </select>
                        <label htmlFor="note">Note</label>
                        <textarea id="note" defaultValue={"..."} />
                        <button type="submit" className="update-btn">
                            Update
                        </button>
                    </form>
                </div>
            </main>
        </>
    )
}
export default Detail_Req;