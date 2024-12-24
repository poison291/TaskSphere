import { SignedIn, SignedOut, SignIn, SignInButton, UserButton } from '@clerk/clerk-react';
import Todos from '../Components/Todos'
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useClerk } from '@clerk/clerk-react';
import { useAuth } from '@clerk/clerk-react';

export default function LoginUI() {
  const navigate = useNavigate()
  const { isSignedIn, isLoaded } = useAuth();

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      navigate("/");
    }
  }, [isLoaded, isSignedIn, navigate]);
  

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        <SignedOut>
          <div className="text-center">
            <p className="text-gray-600 mb-4">
              Sign up to save your to-do list and progress. Or use guest mode to explore!
            </p>
            <SignInButton className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200">
              Sign In
            </SignInButton>
          </div>
        </SignedOut>
      <SignedIn>
        <div className="flex items-center justify-center">
        <h1>You are signed In Redirecting to Main Page...</h1>
        </div>
      </SignedIn>
       
      </div>

    </div>
  );
}
