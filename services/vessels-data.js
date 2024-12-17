const vessels = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [63.08365476795709, 20.53398640088297],
      },
      properties: {
        id: "vessel1",
        name: "Vessel 1",
        speed: 10.5,
        course: 319,
        destination: "JNPT",
        image: "assets/images/vessel1.jpg",
        description: "A large container ship used for trade.",
        atd: "2024-12-1 03:30",
        eta: "2024-12-19 03:30",
        draft: "13m",
        service_status: "In Service",
        recieved_data_time: "18 minutes ago",
        progress: 67,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [72.10280513066311, 18.330052459211366],
      },
      properties: {
        id: "vessel2",
        name: "Vessel 2",
        speed: 12.0,
        course: 219,
        destination: "Nhava Sheva",
        image: "assets/images/vessel2.jpg",
        description: "A large container ship used for trade.",
        atd: "2024-11-1 03:30",
        eta: "2024-12-23 03:30",
        draft: "13m",
        service_status: "In Service",
        recieved_data_time: "18 minutes ago",
        progress: 47,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [73.3910022277018, 7.80718001250676],
      },
      properties: {
        id: "vessel3",
        name: "Vessel 3",
        speed: 14.2,
        course: 129,
        destination: "Colaba",
        image: "assets/images/vessel3.jpg",
        description: "A large container ship used for trade.",
        atd: "2024-10-1 03:30",
        eta: "2024-12-27 03:30",
        draft: "13m",
        service_status: "In Service",
        recieved_data_time: "18 minutes ago",
        progress: 18,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [59.03677597746024, 12.949852480874801],
      },
      properties: {
        id: "vessel4",
        name: "Vessel 4",
        speed: 11.3,
        course: 59,
        destination: "Gateway of India",
        image: "assets/images/vessel4.jpg",
        description: "A large container ship used for trade.",
        atd: "2024-09-1 03:30",
        eta: "2024-12-29 03:30",
        draft: "13m",
        service_status: "In Service",
        recieved_data_time: "18 minutes ago",
        progress: 54,
      },
    },
  ],
};

// Function to simulate minor updates in data
const updateVesselData = () => {
  vessels.features = vessels.features.map((feature) => {
    // Update coordinates with slight random change
    const [lng, lat] = feature.geometry.coordinates;
    feature.geometry.coordinates = [
      lng + (Math.random() * 0.5 - 0.01),
      lat + (Math.random() * 0.02 - 0.01),
    ];

    // Update speed with slight random change
    feature.properties.speed = parseFloat(
      (feature.properties.speed + (Math.random() * 1 - 0.25)).toFixed(1)
    );

    // Simulate progress update
    feature.properties.progress = Math.min(
      feature.properties.progress + Math.random() * 2,
      100
    );

    return feature;
  });

  return vessels;
};

module.exports = { vessels, updateVesselData };
