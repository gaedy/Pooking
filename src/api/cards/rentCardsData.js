import img01 from "/src/assets/img/img01.jpg"
import img02 from "/src/assets/img/img02.jpg"
import img03 from "/src/assets/img/img03.jpg"
import img04 from "/src/assets/img/img04.jpg"
import img05 from "/src/assets/img/img05.jpg"
import img06 from "/src/assets/img/img06.jpg"
import img07 from "/src/assets/img/img07.jpg"
import img08 from "/src/assets/img/img08.jpg"
import img09 from "/src/assets/img/img09.jpg"
import img10 from "/src/assets/img/img10.jpg"


export const rentCardsData = [
  
    {
      "id": 1,
      "title": "Cozy Apartment in Downtown",
      "location": "New York, USA",
      "price": 120,
      "currency": "USD",
      "guests": 2,
      "thumbnail": img01,
      "checkIn": "2024-11-10",
      "checkOut": "2024-11-15",
      "rate": 8.5,
      "reviews": 58,
    },
    {
      "id": 2,
      "title": "Beachside Bungalow",
      "location": "Malibu, USA",
      "price": 250,
      "currency": "USD",
      "guests": 4,
      "thumbnail": img02,
      "checkIn": "2024-12-05",
      "checkOut": "2024-12-12",
      "rate": 9.1,
      "reviews": 118,
    },
    {
      "id": 3,
      "title": "Luxury Villa with Pool",
      "location": "Santorini, Greece",
      "price": 500,
      "currency": "EUR",
      "guests": 6,
      "thumbnail": img03,
      "checkIn": "2024-11-18",
      "checkOut": "2024-11-25",
      "rate": 9.8,
      "reviews": 108,
    },
    {
      "id": 4,
      "title": "Mountain Cabin Retreat",
      "location": "Aspen, USA",
      "price": 200,
      "currency": "USD",
      "guests": 5,
      "thumbnail": img04,
      "checkIn": "2025-01-15",
      "checkOut": "2025-01-22",
      "rate": 8.7,
      "reviews": 241,
    },
    {
      "id": 5,
      "title": "City Loft with Skyline View",
      "location": "Tokyo, Japan",
      "price": 180,
      "currency": "JPY",
      "guests": 2,
      "thumbnail": img05,
      "checkIn": "2024-11-25",
      "checkOut": "2024-12-02",
      "rate": 7.9,
      "reviews": 712,
    },
    {
      "id": 6,
      "title": "Historical Cottage in Countryside",
      "location": "Provence, France",
      "price": 220,
      "currency": "EUR",
      "guests": 4,
      "thumbnail": img06,
      "checkIn": "2024-12-20",
      "checkOut": "2024-12-27",
      "rate": 8.3
    },
    {
      "id": 7,
      "title": "Modern Studio Near Beach",
      "location": "Barcelona, Spain",
      "price": 150,
      "currency": "EUR",
      "guests": 2,
      "thumbnail": img07,
      "checkIn": "2024-11-30",
      "checkOut": "2024-12-05",
      "rate": 8.9,
      "reviews": 1012,
    },
    {
      "id": 8,
      "title": "Rustic Farmhouse",
      "location": "Tuscany, Italy",
      "price": 300,
      "currency": "EUR",
      "guests": 6,
      "thumbnail": img08,
      "checkIn": "2025-01-05",
      "checkOut": "2025-01-12",
      "rate": 9.4,
      "reviews": 542,
    },
    {
      "id": 9,
      "title": "Urban Apartment in City Center",
      "location": "Berlin, Germany",
      "price": 160,
      "currency": "EUR",
      "guests": 3,
      "thumbnail": img09,
      "checkIn": "2024-12-10",
      "checkOut": "2024-12-17",
      "rate": 8.0,
      "reviews": 82,
    },
    {
      "id": 10,
      "title": "Lakefront Cabin",
      "location": "Banff, Canada",
      "price": 280,
      "currency": "CAD",
      "guests": 4,
      "thumbnail": img10,
      "checkIn": "2024-12-25",
      "checkOut": "2024-12-30",
      "rate": 9.2,
      "reviews": 27,
    }
  ]
  


// {
//     "status": "success",
//     "data": {
//       "bookings": [
//         {
//           "id": "bk_123",
//           "hotelName": "Grand Hotel Plaza",
//           "thumbnail": "https://example.com/hotels/grand-plaza.jpg",
//           "location": "New York, USA",
//           "roomType": "Deluxe Double",
//           "dates": {
//             "checkIn": "2024-12-15",
//             "checkOut": "2024-12-20"
//           },
//           "price": {
//             "amount": 1250.00,
//             "currency": "USD"
//           },
//           "status": "confirmed",
//           "guests": {
//             "adults": 2,
//             "children": 1
//           }
//         },
//         {
//           "id": "bk_124",
//           "hotelName": "Seaside Resort",
//           "thumbnail": "https://example.com/hotels/seaside.jpg",
//           "location": "Miami, USA",
//           "roomType": "Ocean View Suite",
//           "dates": {
//             "checkIn": "2024-12-18",
//             "checkOut": "2024-12-25"
//           },
//           "price": {
//             "amount": 2100.00,
//             "currency": "USD"
//           },
//           "status": "pending",
//           "guests": {
//             "adults": 2,
//             "children": 2
//           }
//         },
//         {
//           "id": "bk_125",
//           "hotelName": "Mountain Lodge",
//           "thumbnail": "https://example.com/hotels/mountain.jpg",
//           "location": "Denver, USA",
//           "roomType": "Family Suite",
//           "dates": {
//             "checkIn": "2024-12-20",
//             "checkOut": "2024-12-27"
//           },
//           "price": {
//             "amount": 1800.00,
//             "currency": "USD"
//           },
//           "status": "confirmed",
//           "guests": {
//             "adults": 2,
//             "children": 2
//           }
//         },
//         {
//           "id": "bk_126",
//           "hotelName": "City Central Hotel",
//           "thumbnail": "https://example.com/hotels/city-central.jpg",
//           "location": "Chicago, USA",
//           "roomType": "Standard Double",
//           "dates": {
//             "checkIn": "2024-12-22",
//             "checkOut": "2024-12-24"
//           },
//           "price": {
//             "amount": 450.00,
//             "currency": "USD"
//           },
//           "status": "confirmed",
//           "guests": {
//             "adults": 2,
//             "children": 0
//           }
//         },
//         {
//           "id": "bk_127",
//           "hotelName": "Beach Resort & Spa",
//           "thumbnail": "https://example.com/hotels/beach-resort.jpg",
//           "location": "San Diego, USA",
//           "roomType": "Beach View Suite",
//           "dates": {
//             "checkIn": "2024-12-24",
//             "checkOut": "2024-12-31"
//           },
//           "price": {
//             "amount": 2800.00,
//             "currency": "USD"
//           },
//           "status": "pending",
//           "guests": {
//             "adults": 2,
//             "children": 1
//           }
//         },
//         {
//           "id": "bk_128",
//           "hotelName": "Downtown Inn",
//           "thumbnail": "https://example.com/hotels/downtown.jpg",
//           "location": "Boston, USA",
//           "roomType": "Business Suite",
//           "dates": {
//             "checkIn": "2024-12-26",
//             "checkOut": "2024-12-28"
//           },
//           "price": {
//             "amount": 680.00,
//             "currency": "USD"
//           },
//           "status": "confirmed",
//           "guests": {
//             "adults": 1,
//             "children": 0
//           }
//         },
//         {
//           "id": "bk_129",
//           "hotelName": "Luxury Palace",
//           "thumbnail": "https://example.com/hotels/luxury-palace.jpg",
//           "location": "Las Vegas, USA",
//           "roomType": "Premium Suite",
//           "dates": {
//             "checkIn": "2024-12-28",
//             "checkOut": "2025-01-02"
//           },
//           "price": {
//             "amount": 3200.00,
//             "currency": "USD"
//           },
//           "status": "confirmed",
//           "guests": {
//             "adults": 2,
//             "children": 0
//           }
//         },
//         {
//           "id": "bk_130",
//           "hotelName": "Harbor View Hotel",
//           "thumbnail": "https://example.com/hotels/harbor.jpg",
//           "location": "Seattle, USA",
//           "roomType": "Harbor Suite",
//           "dates": {
//             "checkIn": "2024-12-29",
//             "checkOut": "2025-01-03"
//           },
//           "price": {
//             "amount": 1950.00,
//             "currency": "USD"
//           },
//           "status": "pending",
//           "guests": {
//             "adults": 2,
//             "children": 1
//           }
//         },
//         {
//           "id": "bk_131",
//           "hotelName": "Garden Resort",
//           "thumbnail": "https://example.com/hotels/garden.jpg",
//           "location": "Portland, USA",
//           "roomType": "Garden View Room",
//           "dates": {
//             "checkIn": "2024-12-30",
//             "checkOut": "2025-01-02"
//           },
//           "price": {
//             "amount": 890.00,
//             "currency": "USD"
//           },
//           "status": "confirmed",
//           "guests": {
//             "adults": 2,
//             "children": 0
//           }
//         },
//         {
//           "id": "bk_132",
//           "hotelName": "Skyline Hotel",
//           "thumbnail": "https://example.com/hotels/skyline.jpg",
//           "location": "Austin, USA",
//           "roomType": "City View Suite",
//           "dates": {
//             "checkIn": "2024-12-31",
//             "checkOut": "2025-01-04"
//           },
//           "price": {
//             "amount": 1600.00,
//             "currency": "USD"
//           },
//           "status": "confirmed",
//           "guests": {
//             "adults": 2,
//             "children": 2
//           }
//         }
//       ],
//       "totalResults": 10
//     }
//   }



  