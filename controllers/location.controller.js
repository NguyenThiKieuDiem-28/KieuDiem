const locationModel = require('../models/location.model')

const locationController = {
    getLocations: async (req, res) => {
        try {
            const location = await locationModel.find();
            res.status(200).json(location);
        } catch (error) {
            res.status(400).json({ message: error });
        }
    },
    createLocation: async (req, res) => {
        try {
            const location = await locationModel.create(req.body);
            console.log(req.body);
            res.status(200).json(location);

        } catch (error) {
            res.status(400).json({ message: error });

        }
    },
}

module.exports = locationController;