import React from 'react';
import constrImg from '../assets/constr-img.png';

export default function Home() {
  return (
    <div className="home-page">
      <img className="constr-img" src={constrImg} alt="construction clipart img"></img>
      <p>
        <strong>Resyndication:</strong> This term refers to the process by which Mercy Housing Lakefront renovates one of its properties. This guide aims to provide RSM’s and CM’s with information on what to expect from this potentially challenging process, as a property’s tenants are informed of a required relocation for construction, then moved into temporary apartments, and ultimately moved back into the renovated Mercy Housing property. All the following is based on RS experience during the 2021-2022 resyndication at Carlton Apartments, one of MHL’s Permanent Supportive Housing properties in the Uptown neighborhood of Chicago. Please keep in mind that, despite its title, this document is less a “guide” and more a collection of suggestions or recommendations based on one case manager’s unique experience. The details of any future property’s resyndication will certainly be different in small ways, and possibly in big ways as well. Always consult with your manager for direct guidance. Nevertheless, please explore this guide which offers advice and comments on the <strong>General</strong> resyndication experience, as well as specific tips for RS best practices <strong>Before, During,</strong> and <strong>After</strong> the physical renovation of the building.
      </p>

    </div>
  );
}
