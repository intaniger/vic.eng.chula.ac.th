import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap, InfoWindow, Marker } from "react-google-maps"
import mapStyle from "../asset/mapStyle.json";

const GoogleMapComponent =  withGoogleMap((props) =>(
    <GoogleMap
      defaultZoom={props.isMobile ? 5.8:6.5}
      center={props.isMobile?{ lat: 18.314380, lng: 100.600323 }:{ lat: 16.5, lng: 101.5 }}
      options={{styles:mapStyle}}
      onDragEnd={()=>{
        console.log(props)
      }}
    >
     <Marker
      position={{ lat: 18.314380, lng: 100.600323 }}
    >
      <InfoWindow>
        <div className="thai">
          หมู่บ้านนาแดง ตำบลสันทะ อำเภอนาน้อย จังหวัดน่าน
        </div>
      </InfoWindow>
     </Marker>
    </GoogleMap>
  )
)

export default (props) => (<GoogleMapComponent
  // googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAlZd4JOlNny82tPQheGT2EN9SZepk4Ues"
  // loadingElement= {<div style={{ height: "100%" }} />}
  containerElement={ <div style={{ height: "70vh" }} />}
  mapElement={<div style={{ height: "100%" }} />}
  {...props}/>)
