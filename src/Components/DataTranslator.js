import React from 'react';
import dataTranlatorRole from '../Pics/translatorRole.jpg';

function Data() {
  return (
    <>
      <h3 class='gap'>Data Translator</h3>
      <p>A data translator is someone who can:</p>
      <ul>
        <li>
          Bridge the gap in expertise between technical teams, made up of data
          scientists, data engineers and software developers, and business
          stakeholders
        </li>
        <li>
          Define business problems that analytics can help solve, guide
          technical teams in the creation of analytics-driven solutions to these
          problems, and embed solutions into business operations
        </li>
        <li>Act as a soft skills specialist for data science</li>
      </ul>

      <img src={dataTranlatorRole} width='750' alt='pic2' />

      <h4>Skills of a data translator</h4>
      <ul>
        <li>
          Desire to ask questions and get a deeper understanding of issues
          business and data
        </li>
        <li>
          Confidence to challenge perceptions and biases of individuals at every
          level of the organization
        </li>
        <li>Solid understanding of business requirements and vernacular</li>
        <li>
          Analytics knowledge or desire to acquire it to be effective
          communicating with data scientists
        </li>
        <li>
          Passion to give others an advantage of understanding by using
          accessible language
        </li>
      </ul>

      <h4>Challenges faced by Data Translators</h4>
      <ul>
        <li>Insufficient, incorrect or conflicting data</li>
        <li>Failure to understand the real business problem</li>
        <li>Misapplication of the model</li>
        <li>Solving a problem no-one cares about</li>
        <li>Poor communication of results</li>
        <li>Change is not handled well</li>
        <li>Unrealistic expectations from stakeholders</li>
        <li>Poor project management</li>
        <li>Excessive focus on the model over the problem</li>
        <li>Lack of empathy</li>
      </ul>
    </>
  );
}

export default Data;
