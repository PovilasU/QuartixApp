
export const vehiclesData = {
    "vehicles":[
        {
            "id":1,
            "description":"Tesco",
            "type":"lorry",
            // "inspection": [],
            // "inspection":["battery", "lights","fluids","tyres", "water","fuel"],
            //  "inspection":["water","fluids"],
             "inspection":["fluids"],
        },
        {
            "id":2,
            "description":"Dover",
            "type":"car",
            "inspection": [],
        },
        {
            "id":3,
            "description":"London currier",
            "type":"van",
            "inspection": [],
        },
        {
            "id":4,
            "description":"School",
            "type":"any",
            "inspection": [],
        },
        {
            "id":5,
            "description":"Europe",
            "type":"lorry",
            "inspection": [],
        },
        {
            "id":6,
            "description":"USA",
            "type":"car",
            "inspection": [],
        },
        {
            "id":7,
            "description":"Local",
            "type":"any",
            "inspection":[],
        },
        {
            "id":8,
            "description":"Warehouse",
            "type":"any",
            "inspection": [],
        },

    ],
    "inspections" : [ 
        {
            "id":1,
            "name": "battery",
            "allowedType": ["any"]
        },
        {
            "id":2,
            "name": "tyres",
            "allowedType": ["car","van"],
        },
        {
            "id":3,
            "name": "fluids",
            "allowedType": ["van", "lorry"],
        },
        {
            "id":4,
            "name": "water",
            "allowedType": ["lorry"],
        },
        {
            "id":5,
            "name": "fuel",
            "allowedType": ["car" , "lorry"],
        },
        
        {
            "id":6,
            "name": "lights",
            "allowedType": ["any"],
        },




    ]
}






    
