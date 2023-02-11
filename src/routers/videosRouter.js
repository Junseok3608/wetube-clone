import express from "express";
import { watch, getEdit, upload, remove, postEdit } from "../controllers/videoController";

const videosRouter = express.Router();

videosRouter.get("/upload", upload);
videosRouter.get("/:id(\\d+)", watch);
videosRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);
videosRouter.get("/:id(\\d+)/remove", remove);

export default videosRouter;
