export interface DataInterface{
    id: string,
    name: string,
    status: string,
    location: {
        longitude: string,
        latitude: string,
        text: string,    
            },
    description:{
        first: string,
        second: string,
    },
    water: string,
    internet: string,
    parking:string,
    image: string,
    rooms: string,
    bathrooms: string,
    price:string,
    type: string,
    area: string
}
