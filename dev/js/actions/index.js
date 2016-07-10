export const selectUser = (user) => {
    console.log("Clicked: " + user.first);

    return {
        type: "USER_SELECTED",
        payload: user
    }
};
