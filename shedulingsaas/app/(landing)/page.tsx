import { Button } from '@/components/ui/button';
import { 
  SignedIn, 
  SignedOut, 
  SignInButton, 
  SignUpButton, 
  UserButton 
} from '@clerk/nextjs';
import Link from "next/link";

const LandingPage = () => {
  return (
    <div>
        <div className="flex justify-center p-50 gap-4 h-16">
          Welcome
        </div>
        <div className="flex justify-center p-20 gap-4 h-16">
          <SignedOut>
          <SignInButton>
            <Link href='/sign-in'>
              <Button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                Sign In
              </Button>
            </Link>
            </SignInButton>
            <SignUpButton>
              <Link href="/sign-up">
                <Button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                  Sign Up
                </Button>
              </Link>
            </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
        </div>
    </div>
  )
}

export default LandingPage;