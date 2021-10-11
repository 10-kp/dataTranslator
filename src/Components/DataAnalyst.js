import React from 'react';
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from 'reactstrap';

function Analyst() {
  return (
    <>
      <Card style={{ width: '20rem' }}>
        <h1>Data Analyst</h1>
        <ul>
          <li>
            Data analysts use data to perform reporting and direct analysis.
            Whereas data scientists and engineers typically interact with data
            in its raw or unrefined states, analysts work with data that’s
            already been cleaned and transformed into more user-friendly
            formats.
          </li>
          <li>
            Depending on the challenge they’re trying to solve or address, their
            analysis may be descriptive, diagnostic, predictive, or
            prescriptive.
          </li>
          <li>
            Data analysts are often responsible for maintaining dashboards,
            generating reports, preparing data visualizations, and using data to
            forecast or guide business activity.
          </li>
        </ul>
      </Card>
      <h3>Data Analyst Role</h3>
      <ul>
        <li>
          Data analysts mostly work with an organization's structured data
        </li>
        <li>
          They create reports, dashboards, and other visualizations on data
          associated with customers, business processes, market economics, and
          more to provide insights to senior management and business leaders in
          support of decision-making efforts
        </li>
      </ul>
      <h3>Data Analyst Responsibilites</h3>
      <p>
        Data analysts seek to understand the questions the business needs to
        answer and determine whether those questions can be answered by data.
        They must understand the technical issues associated with collecting
        data, analyzing data, and reporting.
      </p>
      <ul>
        <li>
          Analyzing data using statistical techniques and providing reports
        </li>
        <li>
          Developing and implementing databases and data collection systems
        </li>
        <li>
          Acquiring data from primary and secondary sources and maintain data
          systems
        </li>
      </ul>
    </>
  );
}

export default Analyst;
