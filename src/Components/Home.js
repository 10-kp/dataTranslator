import React from 'react';
import datapic from '../Pics/dataFlow.png';
import { Jumbotron, Button } from 'reactstrap';

function Home() {
  return (
    <>
      <Jumbotron fluid>
        <h3 className='display-3'>Welcome to the Data Translator Page!</h3>
        <p className='lead'>
          The primary objective of a Data Translator is to unlock the value of
          investment in technical resource and teams, by maximising the impact
          of their projects over the entire project lifecycle.
        </p>
        <hr className='my-2' />
        <img src={datapic} width='450' alt='pic1' />

        <p className='my-3'>
          A translator looks for business problems or processes that can be
          streamlined, brings those issues to the data team, drives buy-in from
          stakeholders, then works with data scientists and engineers to hammer
          out a solution.
        </p>
        <hr className='my-2' />
        <p className='lead'>
          <Button
            href='https://www.tandfonline.com/doi/full/10.1080/2058802X.2020.1735794'
            outline
            color='success'
            size='sm'
          >
            Learn More
          </Button>
        </p>
      </Jumbotron>
    </>
  );
}

export default Home;
