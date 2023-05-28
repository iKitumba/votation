import bcrypt from "bcryptjs";

export const comparePassword = async (password: string, hash: string) => {
  const isEqual = await bcrypt.compare(password, hash);

  return isEqual;
};
