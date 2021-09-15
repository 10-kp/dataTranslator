import React from 'react';
import datapic from '../Assets/dataFlow.png';

function Home() {
  return (
    <>
      <h1>Welcome to the Data Translator Page</h1>

      <p>Click on the link to get workflow </p>
      <img src={datapic} width='500' alt='pic1' />

      <h3>To read more on the Data Translators</h3>
      <a href='https://www.tandfonline.com/doi/full/10.1080/2058802X.2020.1735794' />
    </>
  );
}

export default Home;
