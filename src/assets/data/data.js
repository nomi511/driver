import img from '../images/car.png'
import reg from '../images/reg.png'
import cola from '../images/cola.png'
import profile from '../images/profile.png'

const User = {
    id:123,
    name: "John Doe",
    email: 'johndoe@gmail.com',
    mobile: 123456789,
    address: 'Islamabad',
    image: profile,
    car: 123,
    start_date: "12/05/2022",
    location: "33.696318889638434, 73.01341661990375",
    city:'Islamabad',
    license: reg,
    total_income: 32000,
    total_distance: 147,
    total_distance_today: 28,

    hasAd: true,
    ad_detail:{
        id:321,
        start_date: "01/10/2022",
        days_remaining: 20,
        daily_distance: 25, 
        total_distance: 125,
        total_income: 15000
    }

}



const Car = {
    id: 123,
    make: 'Luxus',
    model: 2020,
    image: img,
    type: 'S200',
    registration_picture: reg
}



const Campaign = {
    id:321,
    title:"Coca Cola",
    duration: 1,
    location: "F10, Islamabad",
    ad_image: img,
    logo: cola,
    type: "partial",
    daily_minimum: 50,
    estimated_income: 10000
}


const geojsonData = {
    "type":"FeatureCollection",
    "features":[
        {
            "type":"Feature",
            "properties":{
                "Name":"MainIsb"
            },
            "geometry":{
                "coordinates":[
                    [
                        [
                            72.99562184437798,33.65743022860528
                        ],
                        [
                            73.06691995309308,33.692422149048014
                        ],
                        [
                            73.10088800267602,33.71285291843455
                        ],
                        [
                            73.08131956700834,33.742777490975584
                        ],
                        [
                            73.0475482344863,33.72650401769155
                        ],
                        [
                            73.04060459602374,33.73175386244243
                        ],
                        [
                            73.0353968671767,33.73031018715187
                        ],
                        [
                            73.0353968671767,33.719022434046494
                        ],
                        [
                            72.98226702963004,33.689834908328805
                        ],
                        [
                            72.97502646741682,33.68568457756771
                        ],
                        [
                            72.99562184437798,33.65743022860528
                        ]
                    ]
                ],
                "type":"Polygon"
            }
        }
    ]
}


export {
    Car,
    User,
    Campaign,
    geojsonData
}