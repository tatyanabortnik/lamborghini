//map
let map;

function initMap() {
   map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 37.231823961486086, lng: -8.626276851319425 },
      zoom: 14,
      styles: [
         {
            featureType: "administrative",
            elementType: "all",
            stylers: [
               {
                  saturation: "-100",
               },
            ],
         },
         {
            featureType: "administrative.province",
            elementType: "all",
            stylers: [
               {
                  visibility: "off",
               },
            ],
         },
         {
            featureType: "landscape",
            elementType: "all",
            stylers: [
               {
                  saturation: -100,
               },
               {
                  lightness: 65,
               },
               {
                  visibility: "on",
               },
            ],
         },
         {
            featureType: "poi",
            elementType: "all",
            stylers: [
               {
                  saturation: -100,
               },
               {
                  lightness: "50",
               },
               {
                  visibility: "simplified",
               },
            ],
         },
         {
            featureType: "road",
            elementType: "all",
            stylers: [
               {
                  saturation: "-100",
               },
            ],
         },
         {
            featureType: "road.highway",
            elementType: "all",
            stylers: [
               {
                  visibility: "simplified",
               },
            ],
         },
         {
            featureType: "road.arterial",
            elementType: "all",
            stylers: [
               {
                  lightness: "30",
               },
            ],
         },
         {
            featureType: "road.local",
            elementType: "all",
            stylers: [
               {
                  lightness: "40",
               },
            ],
         },
         {
            featureType: "transit",
            elementType: "all",
            stylers: [
               {
                  saturation: -100,
               },
               {
                  visibility: "simplified",
               },
            ],
         },
         {
            featureType: "water",
            elementType: "geometry",
            stylers: [
               {
                  hue: "#ffff00",
               },
               {
                  lightness: -25,
               },
               {
                  saturation: -97,
               },
            ],
         },
         {
            featureType: "water",
            elementType: "labels",
            stylers: [
               {
                  lightness: -25,
               },
               {
                  saturation: -100,
               },
            ],
         },
      ],
   });
}

window.initMap = initMap;
//map
