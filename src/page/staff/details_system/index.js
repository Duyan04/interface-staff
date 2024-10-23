import { NavLink } from "react-router-dom";


function Detail_System() {
    return (
        <>
            <main className="main-content">
                <h1>Apartment management in the United States</h1>
                <div className="details-form">
                    <a href="system-maintenance-list.html">
                        <button className="back-btn">
                            <span><NavLink to="/staff/assignment/system">←</NavLink></span>
                        </button>
                    </a>
                    <h2>DETAILS OF SYSTEM CONDITION</h2>
                    <form action="#">
                        <label htmlFor="system-id">System ID</label>
                        <input type="text" id="system-id" defaultValue="TM01" />
                        <label htmlFor="location">Location</label>
                        <input type="text" id="location" defaultValue="Tầng 1" />
                        <label htmlFor="status">Status</label>
                        <select id="status">
                            <option selected="">HD bình thường</option>
                            <option>HD bất thường</option>
                        </select>
                        <label htmlFor="nearest-maintenance">Nearest maintenance</label>
                        <input type="date" id="nearest-maintenance" defaultValue="2024-01-01" />
                        <label htmlFor="next-maintenance">Next maintenance</label>
                        <input type="date" id="next-maintenance" defaultValue="2024-11-01" />
                        <label htmlFor="service-provider">Service provider</label>
                        <input type="text" id="service-provider" defaultValue="..." />
                        <label htmlFor="technical-condition">Technical condition</label>
                        <input type="text" id="technical-condition" defaultValue="..." />
                        <label htmlFor="installation-date">Installation date</label>
                        <input type="text" id="installation-date" defaultValue="..." />
                        <label htmlFor="maintenance-times">Number of maintenance times</label>
                        <input type="text" id="maintenance-times" defaultValue="..." />
                        <hr />
                        <label htmlFor="operating-status">Operating status</label>
                        <select id="operating-status">
                            <option selected="">Normal</option>
                            <option>Ongoing</option>
                            <option>Complete</option>
                        </select>
                        <label htmlFor="maintenance-status">Maintenance status</label>
                        <select id="maintenance-status">
                            <option selected="">Ongoing</option>
                            <option>Complete</option>
                            <option>Pending</option>
                        </select>
                        <label htmlFor="note">Note</label>
                        <textarea id="note" defaultValue={""} />
                        <button type="submit" className="update-btn">
                            Update
                        </button>
                    </form>
                </div>
            </main>
        </>
    )
}
export default Detail_System;