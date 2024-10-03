let cityInfo = [
    { id: 1, name: "New York", population: 8.623e6, area: 302.6 },
    { id: 2, name: "Los Angeles", population: 3.983e6, area: 502.7 },
    { id: 3, name: "Chicago", population: 2.712e6, area: 234.53 },
    { id: 4, name: "Ahmedabad", population: 8.854e6, area: 195 },
    { id: 5, name: "Surat", population: 8.3e6, area: 178.22 },
    { id: 6, name: "Bengaluru", population: 6.086e6, area: 286 },
    { id: 7, name: "Mumbai", population: 1.965e6, area: 233 },
    { id: 8, name: "Kolkata", population: 1.908e6, area: 79.15 },
    { id: 9, name: "Delhi", population: 30.854e6, area: 573 }
];

const readCityInfo = async (req, res) => {
    try {
        res.status(200).json(cityInfo);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

const addCityInfo = async (req, res) => {
    try {
        const newCityInfo = req.body;
        cityInfo.push(newCityInfo);
        res.status(201).json({ msg: "City added successfully", cityInfo });
    } catch (error) {
        res.status(400).json({ message: "Invalid data" });
    }
};

const updateCityInfo = async (req, res) => {
    try {
        const cityName = req.params.name;
        const updateInfo = req.body;
        let cityFound = false;
        cityInfo = cityInfo.map(city => {
            if (city.name.toLowerCase() === cityName.toLowerCase()) {
                cityFound = true;
                return { ...city, ...updateInfo };
            }
            return city;
        });
        if (cityFound) {
            res.status(200).json({ msg: "City updated successfully", cityInfo });
        } else {
            res.status(404).json({ message: "City not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteCityInfo = async (req, res) => {
    try {
        const cityName = req.params.name;
        const initialLength = cityInfo.length;
        cityInfo = cityInfo.filter(city => city.name.toLowerCase() !== cityName.toLowerCase());
        if (cityInfo.length < initialLength) {
            res.status(200).json({ msg: "City deleted successfully", cityInfo });
        } else {
            res.status(404).json({ message: "City not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { readCityInfo, addCityInfo, updateCityInfo, deleteCityInfo };

