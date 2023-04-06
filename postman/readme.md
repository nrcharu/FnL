This resource contains Postman API automation of the below endpoint

https://api.restful-api.dev/objects?

The collection contains 2 GET requests
1. request to retrieve all the data 
	- Validate the response status code to be 200
	- Validate the schema of the response data
2. request to retrieve specific ids (1,5,10)
	- Validate the response status code to be 200
	- Validate the schema of the response data
	- Validate only 3 datas are fetched in response
	- Validate only the IDs [1,5,10] are available in the response

The url is declared as Collection level variable.