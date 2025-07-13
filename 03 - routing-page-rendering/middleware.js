import { NextResponse } from "next/server";

export function middleware(request) {
    // check is Authenticated
    console.log('middleware')

    return NextResponse.next()
}

export const config = {
    matcher: '/news'
}
