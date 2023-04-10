import React from 'react';
import SignupModal from '../components/SignupModal'

export default function LandingPage() {

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img alt = "smiling dog" src='./images/happy-pup-1.png' className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Houndr</h1>
            <p className="py-6">Personalized playdates for you and your pup!</p>
            <p>Have you been wanting your furry friend to get some social time? </p>
            <p>Sign up today to meet other dogs in your area!</p>
            <SignupModal></SignupModal>
            {/* <Link to='/signup'><button className="btn btn-primary">Get Started</button></Link> */}
           
          </div>
        </div>
      </div>

      
     );
    }