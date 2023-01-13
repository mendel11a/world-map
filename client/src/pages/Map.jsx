import React, { useEffect } from "react";
import { useState } from "react";
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from "react-simple-maps";
import Swal from 'sweetalert2';

import styled from 'styled-components';
import axios from "axios";

const Container = styled.div`
    font-size: 0.5rem;
    color: white;
    svg {
        display: inline-block;
        vertical-align: middle;
    }

    path {
        fill: grey;
    }
`


const Map = () => {
    const [content, setContent] = useState("")
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(`/countries`);
            setData(res.data);
        };
        fetchData();
    }, []);

    const makeAlert = (name, lon, lat, flag) => {
        Swal.fire({
            title: name,
            text: `Lon: ${lon}\n Lat: ${lat}`,
            imageUrl: flag,
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
        })
    }

    const geoUrl =
        "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"

    return (
        <Container>
            <ComposableMap data-tip="">
                <ZoomableGroup zoom={1}>
                    <Geographies geography={geoUrl}  >
                        {({ geographies }) =>
                            geographies.map((geo) => (
                                <>
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        onMouseEnter={() => {
                                            setContent(`${geo.properties.name}`)
                                        }}
                                        onMouseLeave={() => {
                                            setContent("")
                                        }}
                                        style={{
                                            default: {
                                                fill: "#D6D6DA",
                                                outline: "none"
                                            },
                                            hover: {
                                                fill: "#DDD",
                                                outline: "none",
                                                cursor: "pointer",
                                                stroke: "#FFF"
                                            }
                                        }}
                                    />
                                </>
                            ))
                        }
                    </Geographies>
                    {data.map(({ name, lon, lat, flag }) => (
                        <Marker key={name} coordinates={[lon, lat]}>
                            <image onClick={() => makeAlert(name, lon, lat, flag)} key={name} href={flag} height="7" width="7" cursor="pointer" />
                        </Marker>
                    )
                    )}
                </ZoomableGroup>
            </ComposableMap>
        </Container>
    )
}

export default Map

