const express = require("express");

const {
  applyForJob,
  getMyApplications,
  getApplicationById,
  updateApplicationStatus,
} = require("../controllers/applicationController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();

// Apply for a job
router.post("/", protect, applyForJob);

// Get my applications
router.get("/my", protect, getMyApplications);

// Get single application
router.get("/:id", protect, getApplicationById);

// Update Application Status
router.put("/:id/status", protect, updateApplicationStatus);

module.exports = router;