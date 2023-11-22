import React, { useState } from 'react';
import { MDBBtn, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import SignIn from './SignIn';

export default function Btn() {
  const [S_flag, setS_flag] = useState(false);
  const [L_flag, setL_flag] = useState(false);

  return (
    <MDBRow className='h-100 d-flex justify-content-center align-items-center'>
      <MDBCol col='12' className='text-center'>
        <div className='d-inline-block'>
          <MDBBtn rounded className='mx-2' color='dark' onClick={() => setS_flag(true)}>
            Sign In
          </MDBBtn>
          {S_flag && <SignIn text="Sign in" display={S_flag} setDisplay={setS_flag} />}
          <MDBBtn rounded color='dark' onClick={() => setL_flag(true)}>
            Log in
          </MDBBtn>
          {L_flag && <SignIn text="Log in" display={L_flag} setDisplay={setL_flag} />}
        </div>
      </MDBCol>
    </MDBRow>
  );
}
