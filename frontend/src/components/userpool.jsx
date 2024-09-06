import GLOBAL_VARS from "../GLOBAL_VARS";

import { CognitoUserPool } from "amazon-cognito-identity-js";
const poolData = {
  UserPoolId: GLOBAL_VARS.VITE_APP_USER_POOL_ID,
  ClientId: GLOBAL_VARS.VITE_APP_CLIENT_ID,
};
console.debug(`poolData: ` + JSON.stringify(poolData));
const userpool = new CognitoUserPool(poolData);
export default userpool;
