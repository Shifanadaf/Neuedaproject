import express from 'express';
import emplController from '../controllers/empcontroller.js';

const router = express.Router();

// GET all employees (correct path: /employees)
router.get('/', emplController.getAllEmployees);

// POST a new employee (correct path: /employees)
router.post('/', emplController.createEmployee);

export default router;
