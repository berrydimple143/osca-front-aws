import { NextResponse} from 'next/server';

export function middleware(request) {
    let verified = request.cookies.get('loggedIn');
    let role = request.cookies.get('user_role');

    if(!verified) {
        return NextResponse.redirect(new URL('/login', request.url));
    }
}

export const config = {
    matcher: [
        '/admin/:path*',
        '/admin/users/:path*',
        '/admin/members/:path*',
        '/admin/reports/:path*',
    ]
}
