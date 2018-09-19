import { Router } from 'express';
import * as LaneController from '../controllers/lane.controller';


const router = new Router();

// Add a new Lane
router.route('/lanes').post(LaneController.addLane);

// Get all lanes
router.route('/lanes').get(LaneController.getLanes);

// Delete a lane by laneId
router.route('/lanes/:lane').delete(LaneController.deleteLane);

// Edit a lane name 
router.route('/lanes/:laneId').put(LaneController.editLane);



export default router;
