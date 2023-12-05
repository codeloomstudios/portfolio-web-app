const router = require("express").Router();

const {
    addRequest,
    getAllRequests,
    getRequest,
    updateRequest,
    deleteRequest
} = require("../controllers/RequestController");

//ADD NEW REQUEST
router.post("/addRequest", addRequest);

//GET ALL REQUESTS
router.get("/getAllRequests", getAllRequests);

//GET A REQUEST
router.get("/getRequest/:id", getRequest);

//UPDATE A REQUEST
router.put("/updateRequest/:id", updateRequest);

//DELETE A REQUEST
router.delete("/deleteRequest/:id", deleteRequest);

module.exports = router;