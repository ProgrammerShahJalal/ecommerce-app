import cors from "cors";
import express, { Application, Request, Response } from "express";
import { ProductRoutes } from "./modules/products/product.route";
import { OrderRoutes } from "./modules/orders/order.route";

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes
app.use("/api/products", ProductRoutes);
app.use("/api/orders", OrderRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Word!");
});

// Handling the unknown routes
app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

export default app;
