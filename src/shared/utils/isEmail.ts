const emailRegex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

export const isEmail = (email: string) => {
  if (typeof email !== "string") {
    throw new Error("Email must be string");
  }

  if (emailRegex?.test(email)) {
    return true;
  }
  return false;
};
