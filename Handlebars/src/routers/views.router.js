import { Router } from "express";
import Contenedor from "../Manager/contenedor.js";

const manager = new Contenedor();
const router = Router();

router.get("/welcome", (req, res) => {
  res.render("welcome", {});
});

router.get("/", async (req, res) => {
  res.render("nuevoProducto", { name: "Samuel" });
});

router.get("/mostrarTodo", async (req, res) => {
  let products = await manager.getAll();
  res.render("mostrarTodo", {
    products,
    name: "Samuel",
  });
});

export default router;
