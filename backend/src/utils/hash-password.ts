import bcrypt from "bcryptjs";

export const hashPassword = async (password: string) => {
  const hash = await bcrypt.hash(password, 10);

  return hash;
};
