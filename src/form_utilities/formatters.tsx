export const formatFirstName = ( input: string ) => input.toLocaleLowerCase()
  .replace(
    /(^|\s|-)([\S])/g,
    ( _, p1: string, p2: string ) => p1 + p2.toLocaleUpperCase(),
  );

export const formatToUpperCase = ( input: string ) => input.toLocaleUpperCase();
