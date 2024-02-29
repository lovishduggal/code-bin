import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
    publicRoutes: ['/', "/codebin/:id(\\d+ )"],
});

//*  ["/((?!.+\\.[\\w]+$|_next).*)","/","/(api|trpc)(.*)"]
//* We can access only static files...
//* ?! -> expect
