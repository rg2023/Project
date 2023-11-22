import React, { useState } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
} from 'mdb-react-ui-kit';

function SignIn(props) {

  return (
    <div>
      {props.display && (
        <MDBContainer fluid>
          <MDBRow className='h-100 d-flex justify-content-center align-items-center'>
            <MDBCol col='12'>
              <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '2rem', maxWidth: '500px' }}>
                <MDBCardBody className='p-5 w-100 d-flex flex-column'>
                <button onClick={() => props.setDisplay(false)} style={{ border: 'none', background: 'none',fontSize:'30px' }}>
                <span aria-hidden="true">&times;</span>
                 </button>
                  <h2 className="fw-bold mb-2 text-center">{props.text}</h2>
                  <p className="text-white-50 mb-3">Please enter your login and password!</p>
                  <MDBInput wrapperClass='mb-4 w-100' label='Email address' id='formControlLg' type='email' size="lg" />
                  <MDBInput wrapperClass='mb-4 w-100' label='Password' id='formControlLg' type='password' size="lg" />
                  {props.text =="Sign in"&&<MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Remember password' />}
                  <MDBBtn size='lg'>{props.text}</MDBBtn>
                  <hr className="my-4" />
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      )}
    </div>
  );
}

export default SignIn;
