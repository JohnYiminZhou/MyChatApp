import { PASS_USER_NAME } from './actionTypes';

export const passUserName = (userName) =>{
    return {
        type: PASS_USER_NAME,
        data: userName
    };
}