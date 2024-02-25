import { isValidUsername } from "6pp";

export const usernameValidator = (username) => {
  //code to validate username
    if(!isValidUsername(username))
        return { isValid: false, errorMessage: "Username is invalid" };
};
