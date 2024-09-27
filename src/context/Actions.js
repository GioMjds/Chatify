export const signIn = ({ auth, user }) => {
    return { type: "LOGIN", payload: {auth, user} };
};

export const signOut = () => {
    return { type: "LOGOUT" };
};