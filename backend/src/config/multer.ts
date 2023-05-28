import express, { Request } from "express";
import multer from "multer";
import path from "node:path";
import crypto from "node:crypto";
const IMAGE_TYPES = ["image/png", "image/jpeg", "image/pjpeg"];

const uploadPath = (mimetype: string) => {
  if (IMAGE_TYPES.includes(mimetype)) {
    return path.resolve(__dirname, "..", "..", "uploads");
  } else {
    return new Error("Invalid file type");
  }
};

const successOrErrorResult = (mimetype: string) => {
  const errorResult =
    uploadPath(mimetype) instanceof Error ? uploadPath(mimetype) : null;
  const successResult =
    uploadPath(mimetype) instanceof Error ? null : uploadPath(mimetype);

  return { errorResult, successResult };
};

export const multerConfig = {
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      const result = successOrErrorResult(file.mimetype);
      // @ts-ignore
      cb(result?.errorResult, result.successResult);
    },
    filename: (req, file, cb) => {
      const hash = crypto.randomUUID();
      const ext = path.extname(file.originalname);
      const fileName = hash + ext;

      cb(null, fileName);
    },
  }),
  // @ts-ignore
  fileFilter: (req: Request, file, cb) => {
    const result = successOrErrorResult(file.mimetype);
    cb(result.errorResult, result.successResult);
  },
  limits: {
    fileSize: 13 * 1024 * 1024,
  },
};
