import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { generateToken } from "@/lib/utils/jwt";

export async function signupUser(body: any) {
  const { name, email, password, role } = body;

  if (!name || !email || !password || !role) {
    throw new Error("All fields are required: name, email, password, role");
  }

  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    throw new Error("User with this email already exists");
  }

  const hashed = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashed,
      role: role === "SELLER" ? "SELLER" : "BUYER",
    },
  });

  const token = generateToken(user);
  return { token, user };
}

export async function loginUser(body: any) {
  const { email, password } = body;

  if (!email || !password) {
    throw new Error("Email and password are required");
  }

  const user = await prisma.user.findUnique({
    where: { email },
    include: { bids: true },
  });

  if (!user) {
    throw new Error("User not found");
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw new Error("Invalid credentials");
  }

  const token = generateToken(user);
  return { token, user };
}

export async function getUserDetails(userId: string) {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      createdAt: true,

      projectsCreated: {
        select: {
          id: true,
          title: true,
          description: true,
          budgetMin: true,
          budgetMax: true,
          deadline: true,
          status: true,
        },
      },

      projectsTaken: {
        select: {
          id: true,
          title: true,
          description: true,
          budgetMin: true,
          budgetMax: true,
          deadline: true,
          status: true,
        },
      },

      bids: {
        select: {
          id: true,
          amount: true,
          estimatedTime: true,
          message: true,
          bidStatus: true,
          createdAt: true,
          sellerName: true,
          projectId: true,
        },
      },
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  return user;
}

