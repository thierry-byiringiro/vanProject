export async function requireAuth() {
    const isLoggedIn = false;
    
    if (!isLoggedIn) {
        throw { 
            status: 302, 
            redirectTo: "/login" 
        };
    }
    return null;
}