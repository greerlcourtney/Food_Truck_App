
# SF Food Truck Application
**By: Courtney Greer**
https://github.com/greerlcourtney


## THE ASSIGNMENT:
 [Take Home Engineerign Assignment - San Francisco FoodTrucks](https://github.com/timfpark/take-home-engineering-challenge)

---
In short the assignment was to make it possible for a user to find a food truck no matter where their location took them in the city.
The only requirement for the assignment is that it give us at least 5 food trucks to choose from a particular latitude and longitude.

## README Table of Contents
---
I. Installation instructions

II. Technologies Used

III. Requirements

IV. Future Additions

V. Test Plan

VI. Closing Thoughts

### I. Installation Instructions
---

To run this program. Please clone the entire project folder from github
Next: Open up the termnal from inside of the project folder
Next: Inside of the terminal type "npm start" to runt he server
Next: Inside your favorite browser go to "localhost:3000/" to load the home screen
Next: When entering your San Francisco Location you will only need to enter street address, the application will handle the rest
    Example Addresses:  [ 3369 Mission St. ] [ 401 Van Ness ] [ 600 Guerrero St ] [ 2675 Geary Blvd ]

### II. Technologies Used
---
For the front-end of this app utilized HTML and CSS which I am very comfortable with. The backend I utilized express, node, web APIs and JavaScript. JavaScript I knew at a beginner level. The rest were completely net new to me.
The APIs I utilized in this application were HERE for geocoding and map creation and the SF food truck database.

### III. Requirements
---
The basic requirement if this application was to take in a user’s address in San Francisco and send back 5 of the closest food trucks. I was able to complete this requirement at the minimum level. I took in the user’s location and utilized the HERE geocoding API to find the user’s latitude and longitude. From there I used the user’s longitude and latitude to set the bounds for the next API call. For not I simply added and subtracted .01 from the latitude. Then added and subtracted .1 from the longitude to set the bounds for both directions. The next step was to query through the SF foodtruck API database and select the foodtrucks that fall inside of those bounds. Then I was able to read out the first five trucks on to the results page. The user is then able to go back and start again with the back button. 

### IV. Future Additions
---
These are the additions I hope to complete as my learning continues:
- [ ] Adding a map with push-points
- [ ] 	Error handing with user input
- [ ] Closer algorithm to convert into API query 
- [ ] Sort results from closest to farthest within the top 5
- [ ] Add JavaScript to frontend to make it interactive


### V. Test Plan
---
- [ ] Test that the user location is required
- [ ] Test that the user location can’t be outside of San Francisco
- [ ] Test that the user needs to spell the address correctly
- [ ] Test that the results always bring back 5 trucks
- [ ] Test that the trucks are close by


### VI. Closing Thoughts
---
I began this assignment mid-November and immediately underestimated how much learning would need to get down to get this project to where it is now. My only experiences with web-development or full-application development have been shallow attempts and experiences never ending in a full product. While the project isn’t nearly complete, this project shows the hard work and determination I have to learn a new skill I enjoy. The road was not easy but it has inspired me to continue to learn and grow in whatever career field I enter
