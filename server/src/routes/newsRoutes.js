import { Router } from "express";
import News from "../models/News.js";
import { crud } from "../controllers/crudFactory.js";
import { requireAuth } from "../middleware/auth.js";

const r = Router();
const c = crud(News);

r.get("/", c.list);
r.get("/:id", c.get);
r.post("/", requireAuth, c.create);
r.put("/:id", requireAuth, c.update);
r.delete("/:id", requireAuth, c.remove);

export default r;
