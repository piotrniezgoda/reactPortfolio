import React from 'react';
import {Helmet} from 'react-helmet';
import ogImg from '../../assets/images/ogBg.jpg';

const Head = ({title, description}) => {
  return (
    <Helmet>
      <title>{`Piotr Niezgoda | ${title}`}</title>
      <meta name="description" content={description} />
      <meta property="og:image" content={ogImg} />
    </Helmet>
  )
}

export default Head;