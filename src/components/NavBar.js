'use client';
import { UserButton, useUser } from '@clerk/nextjs';
import Link from 'next/link';

function NavBar() {
    const { isSignedIn, user, isLoaded } = useUser(); //* This is a hook.
    return (
        <div className="p-2 flex justify-between">
            <Link href="/" className="text-2xl font-extrabold">
                CodeBin{'</>'}
            </Link>

            {!isLoaded ? (
                <p>Loading...</p>
            ) : isSignedIn ? (
                <div className="flex items-center gap-2">
                    {' '}
                    <Link
                        href="/codebin/create"
                        className="text-xl text-blue-600 font-bold ">
                        + Add Bin
                    </Link>
                    <UserButton afterSignOutUrl="/"></UserButton>
                </div>
            ) : (
                <div className="flex items-center gap-2">
                    <Link
                        href={'/sign-up'}
                        className="text-xl text-blue-600 font-bold">
                        SignUp
                    </Link>
                    <Link
                        href={'/sign-in'}
                        className="text-xl text-blue-600 font-bold">
                        SignIn
                    </Link>
                </div>
            )}
        </div>
    );
}

export default NavBar;
