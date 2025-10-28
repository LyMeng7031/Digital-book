import { Request, Response } from "express";
import { Author } from "@/models/authorModel";

//  CREATE AUTHOR
export const createAuthorService = async (req: Request, res: Response) => {
  try {
    const { name, phone, dob } = req.body;

    // Check duplicates
    const existing = await Author.findOne({ $or: [{ name }, { phone }] });
    if (existing) {
      return res.status(400).json({
        message: "Author with this name or phone already exists",
      });
    }

    const author = await Author.create({ name, phone, dob });
    return res.status(201).json(author);
  } catch (error) {
    return res.status(500).json({ message: "Server Error", error });
  }
};

//  GET ALL AUTHORS
export const getAllAuthorsService = async (req: Request, res: Response) => {
  try {
    const authors = await Author.find();
    return res.status(200).json(authors);
  } catch (error) {
    return res.status(500).json({ message: "Server Error", error });
  }
};

//  GET AUTHOR BY ID
export const getAuthorByIdService = async (req: Request, res: Response) => {
  try {
    const author = await Author.findById(req.params.id);
    if (!author) return res.status(404).json({ message: "Author not found" });
    return res.status(200).json(author);
  } catch (error) {
    return res.status(500).json({ message: "Server Error", error });
  }
};

//  UPDATE AUTHOR
export const updateAuthorService = async (req: Request, res: Response) => {
  try {
    const { name, phone, dob } = req.body;

    // Prevent duplicate name or phone
    const duplicate = await Author.findOne({
      $or: [{ name }, { phone }],
      _id: { $ne: req.params.id },
    });
    if (duplicate) {
      return res.status(400).json({
        message: "Author with this name or phone already exists",
      });
    }

    const updated = await Author.findByIdAndUpdate(
      req.params.id,
      { name, phone, dob },
      { new: true }
    );
    if (!updated) return res.status(404).json({ message: "Author not found" });
    return res.status(200).json(updated);
  } catch (error) {
    return res.status(500).json({ message: "Server Error", error });
  }
};

//  DELETE AUTHOR
export const deleteAuthorService = async (req: Request, res: Response) => {
  try {
    const deleted = await Author.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Author not found" });
    return res.status(200).json({ message: "Author deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Server Error", error });
  }
};
