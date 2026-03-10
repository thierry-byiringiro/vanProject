export async function requireAuth() {
    const isLoggedIn = false;
    
    if (!isLoggedIn) {
        throw { 
            status: 302, 
            redirectTo: "/login?message=you must login first" 
        };
    }
    return null;
}