import React from 'react';
import datapic from '../Assets/dataFlow.png';

function Home() {
  return (
    <>
      <h1>Welcome to the Data Translator Page</h1>

      <p>
        The primary objective of a Data Translator is to unlock the value of
        investment in technical resource and teams, by maximising the impact of
        their projects over the entire project lifecycle.
      </p>

      <p>
        A translator looks for business problems or processes that can be
        streamlined, brings those issues to the data team, drives buy-in from
        stakeholders, then works with data scientists and engineers to hammer
        out a solution.
      </p>

      <img src={datapic} width='450' alt='pic1' />

      <p>To read more on Data Translators</p>
      <a href='https://www.tandfonline.com/doi/full/10.1080/2058802X.2020.1735794'>
        LINK
      </a>
    </>
  );
}

export default Home;
