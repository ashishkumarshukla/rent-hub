export const users = [{
    name: "ashish",
    email: "ashish@gmail.com",
    password: "123456"
}];

export const posts = [
    {
        "id": 1,
        "isFavorite" : true,
        "images": [
            "https://img.freepik.com/free-photo/real-estate-agent-with-house-model-keys_1150-17813.jpg?size=626&ext=jpg",
            "https://img.freepik.com/free-vector/real-estate-landing-page_23-2148671543.jpg?w=900&t=st=1721736350~exp=1721736950~hmac=327307b92a84c69837f7ceb88c2135ae0347cfd1364ac17dbc63a69946a4187d",
            "https://img.freepik.com/free-vector/hand-drawn-cost-living-illustration_23-2150892213.jpg?size=626&ext=jpg"
        ],
        "building": "1",
        "name": "Khushi Villa",
        "sharedProperty": "yes",
        "location": "Mahalaxmi Nagar",
        "details": "1 bhk fully furnished flat available for rent.",
        "leaseType": "both",
        "currency": "INR",
        "rent": 20000,
        "negotiable": true,
        "priceMode": "perMonth",
        "furnished": "yes",
        "amenities": {
            "wifi": true,
            "gym": true,
            "parking": true,
            "garbage": false,
            "clubHouse": false,
            "visitorParking": false,
            "swimmingPool": false,
            "waterHeater": false,
            "laundry": true,
            "powerbackup": true
        },
        "descriptionTitle": "Cozy and Comfortable",
        "description": "1 bhk flat with all modern amenities, perfect for small families or working professionals.",
        "comments": [
            {
                "message": "Can you please share your alternate contact no",
                "name": "Parveen"
            },
            {
                "message": "Sure, my contact no is +91 98378838833",
                "name": "Ashish"
            },
            {
                "message": "Looks like a good property for a small family",
                "name": "Shubham"
            },
            {
                "message": "Thank you for your valuable feedback",
                "name": "Ashish"
            },
            {
                "message": "Looks good to me, what is the good time to connect with you, I want to connect anytime tomorrow",
                "name": "Pradeep"
            },
            {
                "message": "You can connect anytime tomorrow after 12 noon",
                "name": "Ashish"
            }
        ]
    },
    {
        "id": 2,
        "isFavorite" : false,
        "images": [
            "data:image/jpeg;base64,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",
            "https://img.freepik.com/free-photo/real-estate-agent-with-house-model-keys_1150-17813.jpg?size=626&ext=jpg",
            "https://img.freepik.com/free-vector/hand-drawn-cost-living-illustration_23-2150892213.jpg?size=626&ext=jpg"
        ],
        "building": "2",
        "name": "Sapphire Garden",
        "sharedProperty": "no",
        "location": "Central Park Avenue",
        "details": "2 bhk luxury apartment available for sale.",
        "leaseType": "longTerm",
        "currency": "INR",
        "rent": 35000,
        "negotiable": false,
        "priceMode": "utilitiesIncluded",
        "furnished": "yes",
        "amenities": {
            "wifi": true,
            "gym": true,
            "parking": true,
            "garbage": true,
            "clubHouse": true,
            "visitorParking": true,
            "swimmingPool": true,
            "waterHeater": true,
            "laundry": true,
            "powerbackup": true
        },
        "descriptionTitle": "Luxury Living",
        "description": "Spacious 2 bhk apartment with modern furnishings and top-notch amenities.",
        "comments": [
            {
                "message": "Is this property available for a long-term lease?",
                "name": "Rahul"
            },
            {
                "message": "Yes, it is available for a long-term lease.",
                "name": "Property Owner"
            },
            {
                "message": "Can I schedule a visit next weekend?",
                "name": "Meena"
            },
            {
                "message": "Sure, please contact us to confirm the timing.",
                "name": "Property Manager"
            }
        ]
    },
    {
        "id": 3,
        "isFavorite" : false,
        "images": [
            "https://img.freepik.com/free-vector/real-estate-landing-page_23-2148671543.jpg?w=900&t=st=1721736350~exp=1721736950~hmac=327307b92a84c69837f7ceb88c2135ae0347cfd1364ac17dbc63a69946a4187d",
            "https://img.freepik.com/free-photo/real-estate-agent-with-house-model-keys_1150-17813.jpg?size=626&ext=jpg",
            "https://img.freepik.com/free-vector/hand-drawn-cost-living-illustration_23-2150892213.jpg?size=626&ext=jpg"
        ],
        "building": "2",
        "name": "Sapphire Garden",
        "sharedProperty": "no",
        "location": "Central Park Avenue",
        "details": "2 bhk luxury apartment available for sale.",
        "leaseType": "longTerm",
        "currency": "INR",
        "rent": 35000,
        "negotiable": false,
        "priceMode": "utilitiesIncluded",
        "furnished": "yes",
        "amenities": {
            "wifi": true,
            "gym": true,
            "parking": true,
            "garbage": true,
            "clubHouse": true,
            "visitorParking": true,
            "swimmingPool": true,
            "waterHeater": true,
            "laundry": true,
            "powerbackup": true
        },
        "descriptionTitle": "Modern & Spacious",
        "description": "Beautiful 2 bhk apartment with a contemporary design and luxurious amenities.",
        "comments": [
            {
                "message": "Does the apartment come with a parking space?",
                "name": "Karan"
            },
            {
                "message": "Yes, it includes one parking space.",
                "name": "Property Manager"
            },
            {
                "message": "Is there a gym in the building?",
                "name": "Priya"
            },
            {
                "message": "Yes, the building has a fully equipped gym.",
                "name": "Property Owner"
            }
        ]
    },
    {
        "id": 4,
        "isFavorite" : false,
        "images": [
            "data:image/jpeg;base64,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",
            "https://img.freepik.com/free-photo/real-estate-agent-with-house-model-keys_1150-17813.jpg?size=626&ext=jpg",
            "https://img.freepik.com/free-vector/hand-drawn-cost-living-illustration_23-2150892213.jpg?size=626&ext=jpg"
        ],
        "building": "2",
        "name": "Sapphire Garden",
        "sharedProperty": "no",
        "location": "Central Park Avenue",
        "details": "2 bhk luxury apartment available for sale.",
        "leaseType": "longTerm",
        "currency": "INR",
        "rent": 35000,
        "negotiable": false,
        "priceMode": "utilitiesIncluded",
        "furnished": "yes",
        "amenities": {
            "wifi": true,
            "gym": true,
            "parking": true,
            "garbage": true,
            "clubHouse": true,
            "visitorParking": true,
            "swimmingPool": true,
            "waterHeater": true,
            "laundry": true,
            "powerbackup": true
        },
        "descriptionTitle": "Elegant & Stylish",
        "description": "A chic 2 bhk apartment featuring state-of-the-art interiors and exclusive amenities.",
        "comments": [
            {
                "message": "How old is the building?",
                "name": "Ravi"
            },
            {
                "message": "The building is approximately 5 years old.",
                "name": "Property Manager"
            },
            {
                "message": "Is there a swimming pool in the building?",
                "name": "Anita"
            },
            {
                "message": "Yes, there is a well-maintained swimming pool.",
                "name": "Property Owner"
            }
        ]
    },
    {
        "id": 5,
        "isFavorite" : false,
        "images": [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-J737O-5M80MMdtEk3Qmnt56cw4eZ2i8KShli5Hf1Ahylj9bTeTYNRoeCyw&s",
            "https://img.freepik.com/free-vector/real-estate-landing-page_23-2148671543.jpg?w=900&t=st=1721736350~exp=1721736950~hmac=327307b92a84c69837f7ceb88c2135ae0347cfd1364ac17dbc63a69946a4187d",
            "https://img.freepik.com/free-photo/real-estate-agent-with-house-model-keys_1150-17813.jpg?size=626&ext=jpg"
        ],
        "building": "3",
        "name": "Matrika Casa Greens",
        "sharedProperty": "yes",
        "location": "Greenfield Heights",
        "details": "3 bhk apartment in a serene location.",
        "leaseType": "both",
        "currency": "INR",
        "rent": 45000,
        "negotiable": true,
        "priceMode": "perMonth",
        "furnished": "semi",
        "amenities": {
            "wifi": true,
            "gym": true,
            "parking": true,
            "garbage": true,
            "clubHouse": true,
            "visitorParking": true,
            "swimmingPool": true,
            "waterHeater": true,
            "laundry": false,
            "powerbackup": false
        },
        "descriptionTitle": "Tranquil Living",
        "description": "A peaceful 3 bhk apartment surrounded by lush greenery and equipped with modern amenities.",
        "comments": [
            {
                "message": "Is the rent negotiable?",
                "name": "Divya"
            },
            {
                "message": "Yes, the rent is negotiable.",
                "name": "Property Owner"
            },
            {
                "message": "Is there a school nearby?",
                "name": "Vikas"
            },
            {
                "message": "Yes, there are several schools within a 5 km radius.",
                "name": "Property Manager"
            }
        ]
    },
    {
        "id": 6,
        "isFavorite" : false,
        "images": [
            "https://img.freepik.com/free-vector/hand-drawn-cost-living-illustration_23-2150892213.jpg?size=626&ext=jpg",
            "https://img.freepik.com/free-vector/real-estate-landing-page_23-2148671543.jpg?w=900&t=st=1721736350~exp=1721736950~hmac=327307b92a84c69837f7ceb88c2135ae0347cfd1364ac17dbc63a69946a4187d",
            "https://img.freepik.com/free-photo/real-estate-agent-with-house-model-keys_1150-17813.jpg?size=626&ext=jpg"
        ],
        "building": "3",
        "name": "Matrika Casa Greens",
        "sharedProperty": "yes",
        "location": "Greenfield Heights",
        "details": "3 bhk apartment in a serene location.",
        "leaseType": "both",
        "currency": "INR",
        "rent": 45000,
        "negotiable": true,
        "priceMode": "perMonth",
        "furnished": "semi",
        "amenities": {
            "wifi": true,
            "gym": true,
            "parking": true,
            "garbage": true,
            "clubHouse": true,
            "visitorParking": true,
            "swimmingPool": true,
            "waterHeater": true,
            "laundry": false,
            "powerbackup": false
        },
        "descriptionTitle": "Modern Living",
        "description": "3 bhk apartment offering a blend of comfort and luxury in a serene neighborhood.",
        "comments": [
            {
                "message": "Is there public transport available nearby?",
                "name": "Neha"
            },
            {
                "message": "Yes, there are several bus stops within walking distance.",
                "name": "Property Manager"
            },
            {
                "message": "Are pets allowed in the apartment?",
                "name": "Amit"
            },
            {
                "message": "Yes, pets are allowed with some restrictions.",
                "name": "Property Owner"
            }
        ]
    },
    {
        "id": 7,
        "isFavorite" : false,
        "images": [
            "https://img.freepik.com/free-vector/real-estate-landing-page_23-2148671543.jpg?w=900&t=st=1721736350~exp=1721736950~hmac=327307b92a84c69837f7ceb88c2135ae0347cfd1364ac17dbc63a69946a4187d",
            "https://img.freepik.com/free-photo/real-estate-agent-with-house-model-keys_1150-17813.jpg?size=626&ext=jpg",
            "https://img.freepik.com/free-vector/hand-drawn-cost-living-illustration_23-2150892213.jpg?size=626&ext=jpg"
        ],
        "building": "2",
        "name": "Sapphire Garden",
        "sharedProperty": "no",
        "location": "Central Park Avenue",
        "details": "2 bhk luxury apartment available for sale.",
        "leaseType": "longTerm",
        "currency": "INR",
        "rent": 35000,
        "negotiable": false,
        "priceMode": "utilitiesIncluded",
        "furnished": "yes",
        "amenities": {
            "wifi": true,
            "gym": true,
            "parking": true,
            "garbage": true,
            "clubHouse": true,
            "visitorParking": true,
            "swimmingPool": true,
            "waterHeater": true,
            "laundry": true,
            "powerbackup": true
        },
        "descriptionTitle": "Modern & Spacious",
        "description": "Beautiful 2 bhk apartment with a contemporary design and luxurious amenities.",
        "comments": [
            {
                "message": "Does the apartment come with a parking space?",
                "name": "Karan"
            },
            {
                "message": "Yes, it includes one parking space.",
                "name": "Property Manager"
            },
            {
                "message": "Is there a gym in the building?",
                "name": "Priya"
            },
            {
                "message": "Yes, the building has a fully equipped gym.",
                "name": "Property Owner"
            }
        ]
    },
    {
        "id": 8,
        "isFavorite" : false,
        "images": [
            "https://img.freepik.com/free-vector/real-estate-landing-page_23-2148671543.jpg?w=900&t=st=1721736350~exp=1721736950~hmac=327307b92a84c69837f7ceb88c2135ae0347cfd1364ac17dbc63a69946a4187d",
            "https://img.freepik.com/free-photo/real-estate-agent-with-house-model-keys_1150-17813.jpg?size=626&ext=jpg",
            "https://img.freepik.com/free-vector/hand-drawn-cost-living-illustration_23-2150892213.jpg?size=626&ext=jpg"
        ],
        "building": "2",
        "name": "Sapphire Garden",
        "sharedProperty": "no",
        "location": "Central Park Avenue",
        "details": "2 bhk luxury apartment available for sale.",
        "leaseType": "longTerm",
        "currency": "INR",
        "rent": 35000,
        "negotiable": false,
        "priceMode": "utilitiesIncluded",
        "furnished": "yes",
        "amenities": {
            "wifi": true,
            "gym": true,
            "parking": true,
            "garbage": true,
            "clubHouse": true,
            "visitorParking": true,
            "swimmingPool": true,
            "waterHeater": true,
            "laundry": true,
            "powerbackup": true
        },
        "descriptionTitle": "Elegant & Stylish",
        "description": "A chic 2 bhk apartment featuring state-of-the-art interiors and exclusive amenities.",
        "comments": [
            {
                "message": "How old is the building?",
                "name": "Ravi"
            },
            {
                "message": "The building is approximately 5 years old.",
                "name": "Property Manager"
            },
            {
                "message": "Is there a swimming pool in the building?",
                "name": "Anita"
            },
            {
                "message": "Yes, there is a well-maintained swimming pool.",
                "name": "Property Owner"
            }
        ]
    },
    {
        "id": 9,
        "isFavorite" : false,
        "images": [
            "https://img.freepik.com/free-vector/hand-drawn-cost-living-illustration_23-2150892213.jpg?size=626&ext=jpg",
            "https://img.freepik.com/free-vector/real-estate-landing-page_23-2148671543.jpg?w=900&t=st=1721736350~exp=1721736950~hmac=327307b92a84c69837f7ceb88c2135ae0347cfd1364ac17dbc63a69946a4187d",
            "https://img.freepik.com/free-photo/real-estate-agent-with-house-model-keys_1150-17813.jpg?size=626&ext=jpg"
        ],
        "building": "3",
        "name": "Matrika Casa Greens",
        "sharedProperty": "yes",
        "location": "Greenfield Heights",
        "details": "3 bhk apartment in a serene location.",
        "leaseType": "both",
        "currency": "INR",
        "rent": 45000,
        "negotiable": true,
        "priceMode": "perMonth",
        "furnished": "semi",
        "amenities": {
            "wifi": true,
            "gym": true,
            "parking": true,
            "garbage": true,
            "clubHouse": true,
            "visitorParking": true,
            "swimmingPool": true,
            "waterHeater": true,
            "laundry": false,
            "powerbackup": false
        },
        "descriptionTitle": "Tranquil Living",
        "description": "A peaceful 3 bhk apartment surrounded by lush greenery and equipped with modern amenities.",
        "comments": [
            {
                "message": "Is the rent negotiable?",
                "name": "Divya"
            },
            {
                "message": "Yes, the rent is negotiable.",
                "name": "Property Owner"
            },
            {
                "message": "Is there a school nearby?",
                "name": "Vikas"
            },
            {
                "message": "Yes, there are several schools within a 5 km radius.",
                "name": "Property Manager"
            }
        ]
    },
    {
        "id": 10,
        "isFavorite" : false,
        "images": [
            "https://img.freepik.com/free-vector/hand-drawn-cost-living-illustration_23-2150892213.jpg?size=626&ext=jpg",
            "https://img.freepik.com/free-vector/real-estate-landing-page_23-2148671543.jpg?w=900&t=st=1721736350~exp=1721736950~hmac=327307b92a84c69837f7ceb88c2135ae0347cfd1364ac17dbc63a69946a4187d",
            "https://img.freepik.com/free-photo/real-estate-agent-with-house-model-keys_1150-17813.jpg?size=626&ext=jpg"
        ],
        "building": "3",
        "name": "Matrika Casa Greens",
        "sharedProperty": "yes",
        "location": "Greenfield Heights",
        "details": "3 bhk apartment in a serene location.",
        "leaseType": "both",
        "currency": "INR",
        "rent": 45000,
        "negotiable": true,
        "priceMode": "perMonth",
        "furnished": "semi",
        "amenities": {
            "wifi": true,
            "gym": true,
            "parking": true,
            "garbage": true,
            "clubHouse": true,
            "visitorParking": true,
            "swimmingPool": true,
            "waterHeater": true,
            "laundry": false,
            "powerbackup": false
        },
        "descriptionTitle": "Modern Living",
        "description": "3 bhk apartment offering a blend of comfort and luxury in a serene neighborhood.",
        "comments": [
            {
                "message": "Is there public transport available nearby?",
                "name": "Neha"
            },
            {
                "message": "Yes, there are several bus stops within walking distance.",
                "name": "Property Manager"
            },
            {
                "message": "Are pets allowed in the apartment?",
                "name": "Amit"
            },
            {
                "message": "Yes, pets are allowed with some restrictions.",
                "name": "Property Owner"
            }
        ]
    },
    {
        "id": 11,
        "isFavorite" : false,
        "images": [
            "https://img.freepik.com/free-vector/hand-drawn-cost-living-illustration_23-2150892213.jpg?size=626&ext=jpg",
            "https://img.freepik.com/free-vector/real-estate-landing-page_23-2148671543.jpg?w=900&t=st=1721736350~exp=1721736950~hmac=327307b92a84c69837f7ceb88c2135ae0347cfd1364ac17dbc63a69946a4187d",
            "https://img.freepik.com/free-photo/real-estate-agent-with-house-model-keys_1150-17813.jpg?size=626&ext=jpg"
        ],
        "building": "3",
        "name": "Matrika Casa Greens",
        "sharedProperty": "yes",
        "location": "Greenfield Heights",
        "details": "3 bhk apartment in a serene location.",
        "leaseType": "both",
        "currency": "INR",
        "rent": 45000,
        "negotiable": true,
        "priceMode": "perMonth",
        "furnished": "semi",
        "amenities": {
            "wifi": true,
            "gym": true,
            "parking": true,
            "garbage": true,
            "clubHouse": true,
            "visitorParking": true,
            "swimmingPool": true,
            "waterHeater": true,
            "laundry": false,
            "powerbackup": false
        },
        "descriptionTitle": "Tranquil Living",
        "description": "A peaceful 3 bhk apartment surrounded by lush greenery and equipped with modern amenities.",
        "comments": [
            {
                "message": "Is the rent negotiable?",
                "name": "Divya"
            },
            {
                "message": "Yes, the rent is negotiable.",
                "name": "Property Owner"
            },
            {
                "message": "Is there a school nearby?",
                "name": "Vikas"
            },
            {
                "message": "Yes, there are several schools within a 5 km radius.",
                "name": "Property Manager"
            }
        ]
    },
    {
        "id": 12,
        "isFavorite" : false,
        "images": [
            "data:image/jpeg;base64,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",
            "https://img.freepik.com/free-vector/real-estate-landing-page_23-2148671543.jpg?w=900&t=st=1721736350~exp=1721736950~hmac=327307b92a84c69837f7ceb88c2135ae0347cfd1364ac17dbc63a69946a4187d",
            "https://img.freepik.com/free-photo/real-estate-agent-with-house-model-keys_1150-17813.jpg?size=626&ext=jpg"
        ],
        "building": "3",
        "name": "Matrika Casa Greens",
        "sharedProperty": "yes",
        "location": "Greenfield Heights",
        "details": "3 bhk apartment in a serene location.",
        "leaseType": "both",
        "currency": "INR",
        "rent": 45000,
        "negotiable": true,
        "priceMode": "perMonth",
        "furnished": "semi",
        "amenities": {
            "wifi": true,
            "gym": true,
            "parking": true,
            "garbage": true,
            "clubHouse": true,
            "visitorParking": true,
            "swimmingPool": true,
            "waterHeater": true,
            "laundry": false,
            "powerbackup": false
        },
        "descriptionTitle": "Modern Living",
        "description": "3 bhk apartment offering a blend of comfort and luxury in a serene neighborhood.",
        "comments": [
            {
                "message": "Is there public transport available nearby?",
                "name": "Neha"
            },
            {
                "message": "Yes, there are several bus stops within walking distance.",
                "name": "Property Manager"
            },
            {
                "message": "Are pets allowed in the apartment?",
                "name": "Amit"
            },
            {
                "message": "Yes, pets are allowed with some restrictions.",
                "name": "Property Owner"
            }
        ]
    }
]

export const favourites = [{
    "id": 11,
    "images": [
        "https://img.freepik.com/free-photo/real-estate-agent-with-house-model-keys_1150-17813.jpg?size=626&ext=jpg",
        "https://img.freepik.com/free-vector/real-estate-landing-page_23-2148671543.jpg?w=900&t=st=1721736350~exp=1721736950~hmac=327307b92a84c69837f7ceb88c2135ae0347cfd1364ac17dbc63a69946a4187d",
        "https://img.freepik.com/free-vector/hand-drawn-cost-living-illustration_23-2150892213.jpg?size=626&ext=jpg"
    ],
    "building": "1",
    "name": "Khushi Villa",
    "sharedProperty": "yes",
    "location": "Mahalaxmi Nagar",
    "details": "1 bhk fully furnished flat available for rent.",
    "leaseType": "both",
    "currency": "INR",
    "rent": 20000,
    "negotiable": true,
    "priceMode": "perMonth",
    "furnished": "yes",
    "amenities": {
        "wifi": true,
        "gym": true,
        "parking": true,
        "garbage": false,
        "clubHouse": false,
        "visitorParking": false,
        "swimmingPool": false,
        "waterHeater": false,
        "laundry": true,
        "powerbackup": true
    },
    "descriptionTitle": "Cozy and Comfortable",
    "description": "1 bhk flat with all modern amenities, perfect for small families or working professionals.",
    "comments": [
        {
            "message": "Can you please share your alternate contact no",
            "name": "Parveen"
        },
        {
            "message": "Sure, my contact no is +91 98378838833",
            "name": "Ashish"
        },
        {
            "message": "Looks like a good property for a small family",
            "name": "Shubham"
        },
        {
            "message": "Thank you for your valuable feedback",
            "name": "Ashish"
        },
        {
            "message": "Looks good to me, what is the good time to connect with you, I want to connect anytime tomorrow",
            "name": "Pradeep"
        },
        {
            "message": "You can connect anytime tomorrow after 12 noon",
            "name": "Ashish"
        }
    ]
}];