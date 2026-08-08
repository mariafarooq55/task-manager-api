const express = require("express");
const router = express.Router();
const {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
  updateTaskStatus,
} = require("../controllers/taskController");
const { protect } = require("../middleware/authMiddleware");
const { body } = require("express-validator");
const { validate } = require("../middleware/validateMiddleware");

router.use(protect);

router.get("/", getTasks);
router.post(
  "/",
  [
    body("title").notEmpty().withMessage("Title is required"),
    body("status")
      .optional()
      .isIn(["todo", "in-progress", "completed"])
      .withMessage("Invalid status"),
    body("priority")
      .optional()
      .isIn(["low", "medium", "high"])
      .withMessage("Invalid priority"),
  ],
  validate,
  createTask,
);

router.get("/:id", getTaskById);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);
router.patch(
  "/:id/status",
  [
    body("status")
      .isIn(["todo", "in-progress", "completed"])
      .withMessage("Invalid status"),
  ],
  validate,
  updateTaskStatus,
);

module.exports = router;
