import { EMAIL_REGEX } from "../config";

export const doesNotMatchEmailRegexp = ( input: string ) => {
  if ( input && !input.match( EMAIL_REGEX ) ) {
    return "The field does not match email pattern";
  }

  return undefined;
};
