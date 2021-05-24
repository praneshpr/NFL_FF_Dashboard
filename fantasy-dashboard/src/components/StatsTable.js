import { Table, DropdownButton, Dropdown } from 'react-bootstrap';
import "../scss/stats-table.css";

/**
 * V0.1 static data built by hard-coding as part of setup
 * TODO: make a component for each card rendering
 * TODO : Put the data into JSON and build dynamically
 */
export const StatsTable = () => {
    return (
        <div className="container">
          <div className = "card rb-card">
            <div className="l--margin-top-medium">Quarter Backs</div>
            <DropdownButton id="dropdown-basic-button" title="Scoring" className="l--margin-top-medium">
                <Dropdown.Item href="#/action-1">4/TD</Dropdown.Item>
            </DropdownButton>
            <Table striped bordered hover className="l--margin-top-medium">
              <thead>
                <tr>
                  <th>Player</th>
                  <th>Points</th>
                  <th>Avg</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Josh Aleen</td>
                  <td>405.06</td>
                  <td>25.32</td>
                </tr>
                <tr>
                  <td>Klyer Murray</td>
                  <td>390.74</td>
                  <td>24.42</td>
                </tr>
                <tr>
                  <td>Aaron Rodgers</td>
                  <td>387.26</td>
                  <td>24.20</td>
                </tr>
                <tr>
                  <td>Patrick Mahomes</td>
                  <td>380.40</td>
                  <td>25.36</td>
                </tr>
                <tr>
                  <td>Deshaun Watson</td>
                  <td>376.32</td>
                  <td>23.52</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div className = "card">
            <div className="l--margin-top-medium">Running Backs</div>
            <DropdownButton id="dropdown-basic-button" title="Scoring" className="l--margin-top-medium">
                <Dropdown.Item href="#/action-1">Half</Dropdown.Item>
            </DropdownButton>
            <Table striped bordered hover className="l--margin-top-medium">
            <thead>
                <tr>
                  <th>Player</th>
                  <th>Points</th>
                  <th>Avg</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Alvin Kamara</td>
                  <td>336.3</td>
                  <td>22.4</td>
                </tr>
                <tr>
                  <td>Derrick Henry</td>
                  <td>323.6</td>
                  <td>20.2</td>
                </tr>
                <tr>
                  <td>Dalvin Cook</td>
                  <td>315.8</td>
                  <td>22.6</td>
                </tr>
                <tr>
                  <td>David Montgomery</td>
                  <td>237.8</td>
                  <td>15.9</td>
                </tr>
                <tr>
                  <td>Aaron Jones</td>
                  <td>235.4</td>
                  <td>16.8</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div className = "card">
          <div className="l--margin-top-medium">Wide Receivers</div>
            <DropdownButton id="dropdown-basic-button" title="Scoring" className="l--margin-top-medium">
                <Dropdown.Item href="#/action-1">Half</Dropdown.Item>
            </DropdownButton>
            <Table striped bordered hover className="l--margin-top-medium">
            <thead>
                <tr>
                  <th>Player</th>
                  <th>Points</th>
                  <th>Avg</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Davante Adams</td>
                  <td>300.9</td>
                  <td>21.5</td>
                </tr>
                <tr>
                  <td>Tyreek Hill</td>
                  <td>285.4</td>
                  <td>19.0</td>
                </tr>
                <tr>
                  <td>Stefon Diggs</td>
                  <td>265.1</td>
                  <td>16.6</td>
                </tr>
                <tr>
                  <td>Calvin Ridley</td>
                  <td>236.5</td>
                  <td>15.8</td>
                </tr>
                <tr>
                  <td>DeAndre Hopkins</td>
                  <td>230.3</td>
                  <td>14.4</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
    );
}
