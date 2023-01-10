import React from "react";
import { useState } from "react";
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from "react-simple-maps";
import { Tooltip as ReactTooltip } from 'react-tooltip';
import Flag from 'lyef-flags';

import styled from 'styled-components';

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
const Text = styled.text`
    
`
const Map = () => {
    const [content, setContent] = useState("")

    const average = (arr) => {
        var ave_x = 0;
        var ave_y = 0;

        arr.forEach((item) => { ave_x += item[0] })
        arr.forEach((item) => { ave_y += item[1] })
        const x = ave_x / arr.length
        const y = ave_y / arr.length
        return [x, y]
    }
    const geoUrl =
        "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"

    const capital =
        "http://techslides.com/demos/country-capitals.json"
    return (
        <Container>
            <ReactTooltip>{content}</ReactTooltip>
            <ComposableMap data-tip="">
                <ZoomableGroup zoom={1}>
                    <Geographies geography={geoUrl}  >
                        {({ geographies }) =>
                            geographies.map((geo) => (
                                <>
                                    {/* <Marker coordinates={average(geo.geometry.coordinates[0])}>
                                        <Text textAnchor="middle" fill="#F53">
                                            {geo.properties["name"]}
                                        </Text>
                                        <ReactCountryFlag countryCode={geo.properties["Alpha-2"]} />
                                    </Marker> */}
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
                    <Geographies geography={geoUrl}  >
                        {({ geographies }) =>
                            geographies.map((geo) => (
                                <Marker key={geo.rsmKey} coordinates={average(geo.geometry.coordinates[0])}>
                                    <Text textAnchor="middle" fill="white">
                                        {/* {geo.properties["name"]} */}
                                        <img src={"https://flagcdn.com/us.svg"}/>
                                    {geo.properties["Alpha-2"]?.toLowerCase()}
                                    </Text>
                                    
                                </Marker>
                            )
                            )
                        }
                    </Geographies>

                </ZoomableGroup>
            </ComposableMap>
        </Container>
    )
}

export default Map