/* eslint-disable jsx-a11y/anchor-is-valid */
import { NavLink } from "react-router-dom";


function System() {
  return (
    <>
      <main className="main-content">
        <h1>Apartment management in the United States</h1>
        <div className="title_screen">
          <h2>SYSTEM MAINTENANCE LIST</h2>
          <div className="filters">
            <div className="filter-group">
              <label htmlFor="system-select">Select system</label>
              <select id="system-select">
                <option>Elevator</option>
                <option>Lighting</option>
                <option>Heating</option>
              </select>
            </div>
            <div className="filter-group">
              <label htmlFor="status-select">Select status</label>
              <select id="status-select">
                <option>Normal</option>
                <option>Ongoing</option>
                <option>Complete</option>
              </select>
            </div>
            <input type="text" className="search-bar" placeholder="Search..." />
          </div>
          <table className="maintenance-table">
            <thead>
              <tr>
                <th>
                  <input type="checkbox" />
                </th>
                <th>System ID</th>
                <th>Maintenance date</th>
                <th>Name system</th>
                <th>Maintenance task</th>
                <th>Status</th>
                <th>Detail</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <a href="#">EL001</a>
                </td>
                <td>01/01/2024</td>
                <td>Elevator</td>
                <td>Periodic</td>
                <td>
                  <select>
                    <option>Waiting</option>
                    <option>Ongoing</option>
                    <option>Complete</option>
                  </select>
                </td>
                <td>
                  <NavLink to="/staff/details_system">
                    <button>Detail</button>
                  </NavLink>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <a href="#">EL002</a>
                </td>
                <td>01/01/2024</td>
                <td>Elevator</td>
                <td>Periodic</td>
                <td>
                  <select>
                    <option>Waiting</option>
                    <option>Ongoing</option>
                    <option>Complete</option>
                  </select>
                </td>
                <td>
                  <button>Detail</button>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <a href="#">EL003</a>
                </td>
                <td>01/01/2024</td>
                <td>Elevator</td>
                <td>Periodic</td>
                <td>
                  <select>
                    <option>Waiting</option>
                    <option>Ongoing</option>
                    <option>Complete</option>
                  </select>
                </td>
                <td>
                  <button>Detail</button>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <a href="#">EL004</a>
                </td>
                <td>01/01/2024</td>
                <td>Elevator</td>
                <td>Periodic</td>
                <td>
                  <select>
                    <option>Waiting</option>
                    <option>Ongoing</option>
                    <option>Complete</option>
                  </select>
                </td>
                <td>
                  <button>Detail</button>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <a href="#">EL00</a>
                </td>
                <td>01/01/2024</td>
                <td>Elevator</td>
                <td>Periodic</td>
                <td>
                  <select>
                    <option>Waiting</option>
                    <option>Ongoing</option>
                    <option>Complete</option>
                  </select>
                </td>
                <td>
                  <button>Detail</button>
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
export default System;