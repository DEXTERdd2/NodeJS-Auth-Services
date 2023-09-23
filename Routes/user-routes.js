const mongoose = require("mongoose");
const { GetAllUser } = require("../Controllers/user-controller");
import { GetAllUser, signup } from "../Controllers/user-controller";
const router = express.Router();

router.get("/", GetAllUser);
router.post("/", signup);

export default router;