var APP_DATA = {
  "scenes": [
    {
      "id": "0-living-room",
      "name": "Living Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3513,
      "initialViewParameters": {
        "yaw": 0.5115625826713757,
        "pitch": 0,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -2.72072558620642,
          "pitch": 0.1569075961410178,
          "rotation": 0,
          "target": "1-terrace"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-terrace",
      "name": "Terrace",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3510,
      "initialViewParameters": {
        "yaw": 0.10663077532337084,
        "pitch": 0,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 0.752976150851353,
          "pitch": 0.19728147770268833,
          "rotation": 0,
          "target": "0-living-room"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "panorama",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
