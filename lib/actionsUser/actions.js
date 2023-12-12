"use server";
import { redirect } from "next/navigation";
import db from "../db/db";
import bcrypt from "bcrypt";
import { signIn } from "@/app/auth";
import { revalidatePath } from "next/cache";

export const createUser = async (formData) => {
  const { email, password, name } = Object.fromEntries(formData);
  try {
    if (!email || !password || !name) {
      throw new Error("Missing fields");
    }
    const isExisting = await db.user.findUnique({
      where: {
        email,
      },
    });
    if (isExisting) {
      throw new Error("User already exists");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await db.user.create({
      data: {
        name,
        email,
        hashedPassword,
      },
    });
  } catch (e) {
    console.error(e.message);
  }
  redirect("/login");
};


export const authenticate = async (prevState, formData) => {

  const { email, password } = Object.fromEntries(formData);

  try {
     await signIn("credentials", {
      email,
      password
    });
  
  } catch (e) {
    console.error(e.message);
  }
  revalidatePath('/')
  redirect('/')
};
