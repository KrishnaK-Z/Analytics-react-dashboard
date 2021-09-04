import React from "react";
import Card from "../../card";
import "./socialMedia.scss";

/**
 * Social Media
 *
 * @classdesc Renders the Social media visitors stats table.
 */
const SocialMedia = () => {
  const header = <h1>Social Media Traffic</h1>;

  return (
    <Card className="social-media" header={header}>
      <table className="card-table">
        <thead>
          <tr>
            <th>Network</th>
            <th>Visitors</th>
            <th />
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Instagram</td>
            <td colSpan={3}>
              <div className="traffic-stat-bar">
                <span>3,550</span>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" />
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>Facebook</td>
            <td colSpan={3}>
              <div className="traffic-stat-bar">
                <span>2,236</span>
                <div className="progress">
                  <div
                    className="progress-bar"
                    style={{ width: "50%" }}
                    role="progressbar"
                  />
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>Twitter</td>
            <td colSpan={3}>
              <div className="traffic-stat-bar">
                <span>1,795</span>
                <div className="progress">
                  <div
                    className="progress-bar"
                    style={{ width: "90%" }}
                    role="progressbar"
                  />
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>LinkedIn</td>
            <td colSpan={3}>
              <div className="traffic-stat-bar">
                <span>62</span>
                <div className="progress">
                  <div
                    className="progress-bar"
                    style={{ width: "20%" }}
                    role="progressbar"
                  />
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </Card>
  );
};

export default SocialMedia;
