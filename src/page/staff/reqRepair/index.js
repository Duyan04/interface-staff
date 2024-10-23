/* eslint-disable jsx-a11y/anchor-is-valid */
import { NavLink } from "react-router-dom";

function RequestRepair() {
  return (
    <>
      <main className="main-content">
        <h1>Apartment management in the United States</h1>

        <div className="title_screen">
          <h2>LIST OF REPAIR REQUIREMENTS</h2>
          <div className="filters">
            <input type="text" className="search-bar" placeholder="Search..." />
            <div className="filter-group">
              <label htmlFor="status-select">Select status</label>
              <select id="status-select">
                <option>Waiting</option>
                <option>Ongoing</option>
                <option>Complete</option>
              </select>
            </div>
          </div>
          <table className="repair-table">
            <thead>
              <tr>
                <th>
                  <input type="checkbox" />
                </th>
                <th>Request ID</th>
                <th>Account</th>
                <th>Request date</th>
                <th>Maintenance equipment</th>
                <th>Processing status</th>
                <th>Detail</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <NavLink to="#">RQ001</NavLink>
                </td>
                <td>AC001</td>
                <td>01/01/2024</td>
                <td>Air conditioner</td>
                <td>
                  <select>
                    <option>Waiting</option>
                    <option>Ongoing</option>
                    <option>Complete</option>
                  </select>
                </td>
                <td>
                  <NavLink to="/staff/details_req">
                    <button>Detail</button>
                  </NavLink>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="pagination">
            <a href="#">«</a>
            <a href="#" className="active">
              1
            </a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">»</a>
          </div>
        </div>
      </main>

    </>
  )
}
export default RequestRepair;