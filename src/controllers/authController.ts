import { Request, Response } from "express";
import { registerService, loginService } from "../services/authService";

export const registerController = async (req: Request, res: Response) => {
  await registerService(req, res);
};

export const loginController = async (req: Request, res: Response) => {
  await loginService(req, res);
};
