const axios = require('axios');
const API_URL = 'https://anapioficeandfire.com/api/houses';

exports.getHouses = async (req, res) => {try {
    const page = req.query.page || 1;
    const response = await axios.get(`${API_URL}`);
    res.json(response.data);
} catch (error) {
    res.status(500).json({ message: 'Error fetching posts', error: error.message });
}};

exports.updateHouses = async (req, res) => {try {
    const { id } = req.params;
    const response = await axios.put(`${API_URL}`, req.body);
    res.json(response.data);

} catch (error) {
    res.status(500).json({ message: 'Error updating post', error: error.message });
}
};
