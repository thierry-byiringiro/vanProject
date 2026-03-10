export async function requireAuth() {
    const isLoggedIn = localStorage.getItem("loggedIn");
    
    if (!isLoggedIn) {
        throw { 
            status: 302, 
            redirectTo: "/login?message=you must login first" 
        };
    }
    return null;
}