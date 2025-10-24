import { Request, Response } from "express";
import CardModel from "../models/Card";

export const getCards = async (req: Request, res: Response) => {
  try {
    const cards = await CardModel.find();
    res.json(cards);
  } catch (error) {
    res.status(500).json({ message: "Error fetching cards", error });
  }
};
