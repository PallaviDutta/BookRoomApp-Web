var obj = {
    "roomList": [
        {
            "roomDetails": {
                "_id": "5c4fb98e561e8c02e86a2060",
                "name": "Omega",
                "numberOfSeats": 5,
                "buildingId": "5c348c95880fee223eb6801e",
                "floorNumber": "Ground Floor",
                "whiteboard": true,
                "tv": false,
                "phone": false,
                "roomPic": "https://s3.ap-south-1.amazonaws.com/2gethrteam/building/5c41bcd803a72132b4fe08e3/objects/image-5f7ad3eb-a7df-4bbf-9680-cbdc9febdf99.jpg",
                "conference__cost_in_credits": 2,
                "organisationId": "5c405f31bc07c2100d676400",
                "__v": 0
            }
        },
        {
            "roomDetails": {
                "_id": "5c5a979f9a3d9301fc688672",
                "name": "Alpha",
                "numberOfSeats": 5,
                "buildingId": "5c348c95880fee223eb6801e",
                "floorNumber": "1st",
                "whiteboard": true,
                "tv": true,
                "phone": false,
                "roomPic": "https://2gethrteam.s3.ap-south-1.amazonaws.com/building/5c405effbc07c2100d6763ff/objects/image-67d42089-6dbe-4fdb-8dfd-6e2d330c45f4.jpg",
                "conference__cost_in_credits": 3,
                "organisationId": "0",
                "__v": 0
            }
        },
        {
            "roomDetails": {
                "_id": "5c4fb79816799b02845eb125",
                "name": "Pie",
                "numberOfSeats": 4,
                "buildingId": "5c348c95880fee223eb6801e",
                "floorNumber": "Ground Floor",
                "whiteboard": true,
                "tv": false,
                "phone": false,
                "roomPic": "https://2gethrteam.s3.ap-south-1.amazonaws.com/building/5c41bcd803a72132b4fe08e3/objects/image-45bea591-6d44-44a9-a048-0dd575853e9f.jpg",
                "conference__cost_in_credits": 2,
                "organisationId": "0",
                "__v": 0
            }
        },
        {
            "roomDetails": {
                "_id": "5c5989d25b4b0c09e47c62e3",
                "name": "Delta",
                "numberOfSeats": 4,
                "buildingId": "5c348c95880fee223eb6801e",
                "floorNumber": "1st floor",
                "whiteboard": true,
                "tv": false,
                "phone": false,
                "roomPic": "https://2gethrteam.s3.ap-south-1.amazonaws.com/building/5c405effbc07c2100d6763ff/objects/image-6500d630-298a-458d-9b23-a3b47bb36d05.jpg",
                "conference__cost_in_credits": 2,
                "organisationId": "0",
                "__v": 0
            }
        }
    ]
}



var htmlText = '';
for(var i in obj.roomList){

    htmlText += '<div class="col-sm-4 card container ss">';
    htmlText += '<img src="'+obj.roomList[i].roomDetails.roomPic + '"alt="smile" class="imgs">';
    htmlText += '<p> Name - '+obj.roomList[i].roomDetails.name + '</p>';
    htmlText += '<p> Floor - '+obj.roomList[i].roomDetails.floorNumber + '</p>';
    htmlText += '<p> Seats - '+obj.roomList[i].roomDetails.numberOfSeats + '</p>';
    htmlText += '<button type="button" class="btn btn1">Book Now</button>';
    htmlText += '</div>';
}
$('body').append(htmlText);


