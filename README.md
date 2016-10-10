# Where are U now-app  

A simple app for location detection using the HTML5 Geolocation API.

### Dependencies

##### Front-end  
- AngularJS 1.5.8  
- Angular-animate 1.5.8  
- Angular-resource 1.5.8
- ngGeolocation  0.0.8  
- Angular-simple-logger 0.1.7  
- Leaflet 0.7.7  
- Leaflet-plugins 1.6.1
- ui-leaflet 1.0.2
- ui-leaflet-layers 0.1.2
- Angular-material 1.1.1  
- Angular-ui-router 0.3.1


## Database

#### Schema

| id | timestamp | name | latitude | longitude |
|----|-----------|------|----------|-----------|
| bigserial| timestamp|text| double precision| double precision|



Create table *points*:
```
CREATE TABLE points (id BIGSERIAL,time TIMESTAMP WITH TIME ZONE,name TEXT,latitude DOUBLE PRECISION NOT NULL,longitude double precision NOT NULL);
```

Insert a POI:
```
INSERT INTO points (time,name,latitude,longitude) VALUES (now(),'Home',37.9838096,23.7275388);
```
[site](https://where-r-u-now-456789.herokuapp.com/)
