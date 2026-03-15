export async function requireAuth(request) {
    const isLoggedIn = localStorage.getItem("loggedIn");
    const pathname = new URL(request.url).pathname;
    if (!isLoggedIn) {
        throw { 
            status: 302, 
            redirectTo: `/login?message=you must login first.&redirectTo=${pathname}` 
        };
    }
    return null;
}