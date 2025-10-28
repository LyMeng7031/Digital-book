import { Request, Response } from "express";
import {
  createAuthorService,
  getAllAuthorsService,
  getAuthorByIdService,
  updateAuthorService,
  deleteAuthorService,
} from "@/services/authorService";

export const createAuthorController = (req: Request, res: Response) =>
  createAuthorService(req, res);

export const getAllAuthorsController = (req: Request, res: Response) =>
  getAllAuthorsService(req, res);

export const getAuthorByIdController = (req: Request, res: Response) =>
  getAuthorByIdService(req, res);

export const updateAuthorController = (req: Request, res: Response) =>
  updateAuthorService(req, res);

export const deleteAuthorController = (req: Request, res: Response) =>
  deleteAuthorService(req, res);
