import React, { useState, useRef, useEffect } from 'react';
import Map, { Marker, NavigationControl } from 'react-map-gl/mapbox';
import { MapPin, Phone, Mail } from 'lucide-react';
import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN = 'pk.eyJ1IjoiYm9kb200NzQ5MCIsImEiOiJjbWlkN2V2ZmEwMmlvMmtzaDM4Y2tnZWZvIn0.r82R70gj0Zu-8z1J8QLUjA';

const locations = [
    {
        id: 'dubai',
        name: 'Dubai',
        coordinates: { lat: 24.9745, lng: 55.1983 },
        address: '274 Street - Dubai Investment Park - 2, Dubai - U.A.E.',
        phones: ['+971 523003423'],
        emails: ['waqas@alattastech.com']
    },
    {
        id: 'india',
        name: 'Surat, India',
        coordinates: { lat: 21.2349, lng: 72.8163 },
        address: '201, Akshar Square, opp. Cancer Hospital, Dabholi, Surat, Gujarat, India - 395004',
        phones: ['+91-7096859504'],
        emails: ['codebaseinfotech@gmail.com']
    },
];

const LocationMapSection = () => {
    const [selectedLocation, setSelectedLocation] = useState(locations[0]);
    const [viewState, setViewState] = useState({
        latitude: 23.5,
        longitude: 64.0,
        zoom: 3.8,
        pitch: 0,
        bearing: 0
    });

    const mapRef = useRef(null);

    const handleMarkerClick = (location) => {
        setSelectedLocation(location);
        setViewState({
            ...viewState,
            latitude: location.coordinates.lat,
            longitude: location.coordinates.lng,
            zoom: 12,
            transitionDuration: 1500
        });
    };

    return (
        <section className="py-16 bg-white overflow-hidden">
            <style>
                {`
                    .mapboxgl-ctrl-group { display: none !important; }
                    .mapboxgl-ctrl { display: none !important; }
                    .mapboxgl-ctrl-bottom-right { display: none !important; }
                    .mapboxgl-ctrl-bottom-left { display: none !important; }
                `}
            </style>
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <span className="text-green-600 font-bold uppercase tracking-wider text-sm block mb-4">CONTACT US</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-black">
                        Get <span className="text-[#1A3C8B]">in Touch</span> With Us. We are<br />
                        Happy Help.
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-center min-h-[500px] lg:min-h-[600px]">
                    {/* Left - Map */}
                    <div className="w-full lg:w-[600px] h-[400px] md:h-[500px] lg:h-[600px] rounded-[30px] md:rounded-[40px] overflow-hidden shadow-2xl relative border-4 border-white group/map bg-gray-100">
                        <Map
                            ref={mapRef}
                            {...viewState}
                            onMove={evt => setViewState(evt.viewState)}
                            mapStyle="mapbox://styles/mapbox/light-v11"
                            mapboxAccessToken={MAPBOX_TOKEN}
                            attributionControl={false}
                            antialias={true}
                            minZoom={3}
                            maxZoom={18}
                        >
                            {locations.map((loc) => (
                                <Marker
                                    key={loc.id}
                                    latitude={loc.coordinates.lat}
                                    longitude={loc.coordinates.lng}
                                    anchor="bottom"
                                    onClick={(e) => {
                                        e.originalEvent.stopPropagation();
                                        handleMarkerClick(loc);
                                    }}
                                >
                                    <div className="group relative cursor-pointer flex flex-col items-center">
                                        <div className="mb-2 bg-[#1a2332] text-white text-[10px] font-bold px-3 py-1 rounded shadow-lg uppercase tracking-wider">
                                            {loc.name}
                                        </div>

                                        <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${selectedLocation.id === loc.id ? 'bg-[#1A3C8B] scale-110 ring-4 ring-blue-100' : 'bg-[#1a2332] hover:bg-[#1A3C8B]/80'}`}>
                                            <div className="w-3 h-3 md:w-4 md:h-4 bg-white rounded-full"></div>
                                        </div>
                                    </div>
                                </Marker>
                            ))}
                        </Map>
                    </div>

                    {/* Right - Details Cards */}
                    <div className="w-full lg:w-[450px] flex items-center justify-center relative px-2 md:px-0 mt-8 lg:mt-0">
                        <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] h-[95%] bg-white rounded-3xl shadow-sm rotate-2 z-0 border border-gray-100"></div>
                        <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[95%] h-[98%] bg-white rounded-3xl shadow-md rotate-1 z-10 border border-gray-100"></div>

                        <div className="relative w-full bg-white rounded-3xl shadow-2xl p-6 md:p-10 z-20 border-t-[6px] border-[#1A3C8B] min-h-[400px] md:min-h-[450px] flex flex-col items-center">
                            <h3 className="text-3xl md:text-4xl font-extrabold text-[#1a2332] mb-4 md:mb-6 text-center">
                                Location in <span className="text-green-600">{selectedLocation.name.split(',')[0]}</span>
                            </h3>

                            <div className="w-full space-y-4 md:space-y-2 flex flex-col items-center">
                                {selectedLocation.phones.map((phone, idx) => (
                                    <div key={idx} className="flex items-center gap-3 md:gap-4 text-lg md:text-xl font-bold text-[#1a2332]">
                                        <div className="w-6 h-6 flex items-center justify-center">
                                            <Phone className="w-6 h-6 transform rotate-12 text-[#1A3C8B]" />
                                        </div>
                                        <span>{phone}</span>
                                    </div>
                                ))}

                                {selectedLocation.emails.map((email, idx) => (
                                    <div key={idx} className="flex items-center gap-3 md:gap-4 text-base md:text-lg font-semibold text-gray-700">
                                        <div className="w-6 h-6 flex items-center justify-center">
                                            <Mail className="w-6 h-6 text-[#1A3C8B]" />
                                        </div>
                                        <span className="truncate max-w-[200px] md:max-w-full text-wrap">{email}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-4 md:mt-8 w-full bg-[#c5e1a5] p-6 md:p-8 rounded-2xl text-center shadow-sm">
                                <p className="text-[#1a2332] font-bold text-sm md:text-base leading-relaxed">
                                    Address : {selectedLocation.address}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LocationMapSection;
