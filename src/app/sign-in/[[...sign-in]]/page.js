import { SignIn } from '@clerk/nextjs';

export default function Page() {
    return (
        <div className="h-[80vh] flex justify-center items-center mt-10">
            <SignIn />
        </div>
    );
}

// [[...folderName]]: Optional catch segments: you can read more about it dynamic routes in NextJS
