const Application = require("../models/Application");
const Job = require("../models/Job");

// ==========================
// Apply for a Job
// ==========================
const applyForJob = async (req, res) => {
  try {
    const { jobId, coverLetter } = req.body;

    // Check job ID
    if (!jobId) {
      return res.status(400).json({
        success: false,
        message: "Job ID is required",
      });
    }

    // Check if job exists
    const job = await Job.findById(jobId);

    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });
    }

    // Check if user already applied
    const existingApplication = await Application.findOne({
      job: jobId,
      applicant: req.user.id,
    });

    if (existingApplication) {
      return res.status(400).json({
        success: false,
        message: "You have already applied for this job",
      });
    }

    // Create application
    const application = await Application.create({
      job: jobId,
      applicant: req.user.id,
      coverLetter: coverLetter || "",
    });

    // Populate job and applicant information
    const populatedApplication = await Application.findById(
      application._id
    )
      .populate("job", "title company location")
      .populate("applicant", "name email");

    res.status(201).json({
      success: true,
      message: "Application submitted successfully",
      application: populatedApplication,
    });
  } catch (error) {
    console.error("Apply Job Error:", error.message);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

// ==========================
// Get My Applications
// ==========================
const getMyApplications = async (req, res) => {
  try {
    const applications = await Application.find({
      applicant: req.user.id,
    })
      .populate("job", "title company location salary jobType")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: applications.length,
      applications,
    });
  } catch (error) {
    console.error("Get Applications Error:", error.message);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

// ==========================
// Get Single Application
// ==========================
const getApplicationById = async (req, res) => {
  try {
    const application = await Application.findById(req.params.id)
      .populate("job", "title company location salary jobType description")
      .populate("applicant", "name email");

    if (!application) {
      return res.status(404).json({
        success: false,
        message: "Application not found",
      });
    }

    // Only the applicant can view their application
    if (application.applicant._id.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: "You are not allowed to view this application",
      });
    }

    res.status(200).json({
      success: true,
      application,
    });
  } catch (error) {
    console.error("Get Application Error:", error.message);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

// ==========================
// Update Application Status
// ==========================
const updateApplicationStatus = async (req, res) => {
  try {
    const { status } = req.body;

    // Validate status
    const allowedStatuses = [
      "Applied",
      "Shortlisted",
      "Rejected",
      "Selected",
    ];

    if (!allowedStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid application status",
      });
    }

    // Find application
    const application = await Application.findById(req.params.id);

    if (!application) {
      return res.status(404).json({
        success: false,
        message: "Application not found",
      });
    }

    // Find the related job
    const job = await Job.findById(application.job);

    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Related job not found",
      });
    }

    // Only the job owner can update application status
    if (job.postedBy.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: "You are not allowed to update this application",
      });
    }

    application.status = status;

    await application.save();

    const updatedApplication = await Application.findById(
      application._id
    )
      .populate("job", "title company location")
      .populate("applicant", "name email");

    res.status(200).json({
      success: true,
      message: "Application status updated successfully",
      application: updatedApplication,
    });
  } catch (error) {
    console.error("Update Application Status Error:", error.message);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

module.exports = {
  applyForJob,
  getMyApplications,
  getApplicationById,
  updateApplicationStatus,
};