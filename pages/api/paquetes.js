import { paquetes } from "../../data/paquetes";

export default function handler(req, res) {
  res.status(200).json(paquetes);
}
