import React from 'react';
import datapic from '../Pics/dataFlow.png';
import { Button } from 'reactstrap';
import Typewriter from 'typewriter-effect';
import 'App.css';

function Home() {
  return (
    <div class='padding'>
      <Typewriter
        options={{
          strings: ['Welcome to the Data Translator Page!'],
          autoStart: true,
          loop: true,
          deleteSpeed: 20,
        }}
      />
      <p className='lead'>
        Part of the Data Analytics team, a Data Translator unlocks the value of
        investment in technical resource and teams, by maximising the impact of
        their projects over the entire project lifecycle.
      </p>
      <img src={datapic} width='350' alt='pic1' />
      <p className='lead'>
        A translator looks for business problems or processes that can be
        streamlined, brings those issues to the data team, drives buy-in from
        stakeholders, then works with data scientists and engineers to hammer
        out a solution.
      </p>
      <hr className='my-2' />
      <p className='my-3'>
        <Button href='/DataTranslator' outline color='info' size='md'>
          Learn More on Data Translator
        </Button>
      </p>
      <p className='my-3'>
        <Button href='/DataAnalytics' outline color='success' size='md'>
          Learn More on Data Analytics
        </Button>
      </p>
    </div>
  );
}

export default Home;
