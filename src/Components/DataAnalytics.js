import React from 'react';
import dataCircle from '../Pics/dataAnalyticsCircle.png';

import 'App.css';

function DataAnaytics() {
  return (
    <div class='padding'>
      <h3>Data Analytics</h3>

      <p>
        Data analytics is the broad field of using data and tools to make
        business decisions.
      </p>

      <p>
        Data analytics is a broad term that defines the concept and practice
        (or, perhaps science and art) of all activities related to data. The
        primary goal is for data experts, including data scientists, engineers,
        and analysts, to make it easy for the rest of the business to access and
        understand these findings.
      </p>

      <p>
        It should not be confused with Data Analysis, a subset of data
        analytics, which refers to specific actions. A chart for better
        understanding is given below.
      </p>
      <img src={dataCircle} width='250' alt='pic3' />

      <h4>There are four types of data analytics</h4>
      <ul>
        <li>
          Descriptive analytics: What has happened and what is happening right
          now? Descriptive analytics uses historical and current data from
          multiple sources to describe the present state by identifying trends
          and patterns. In business analytics, this is the purview of business
          intelligence (BI).
        </li>
        <li>
          Diagnostic analytics: Why is it happening? Diagnostic analytics uses
          data (often generated via descriptive analytics) to discover the
          factors or reasons for past performance.
        </li>
        <li>
          Diagnostic analysis. This analysis answers “Why did it happen?” by
          seeking the cause from the insights discovered during statistical
          analysis. This type of analysis is beneficial for identifying behavior
          patterns of data.{' '}
        </li>
        <li>
          Prescriptive analytics: What do we need to do? Prescriptive analytics
          is a type of advanced analytics that involves the application of
          testing and other techniques to recommend specific solutions that will
          deliver desired outcomes. In business, predictive analytics uses
          machine learning, business rules, and algorithms.
        </li>
      </ul>
    </div>
  );
}

export default DataAnaytics;
