This resource contains Postman API automation of the below endpoint

https://api.restful-api.dev/objects?

Testcases list-
Testcase steps are elaborated in 'RestfulAPI_TestCases.xlsx'

Postman Script-

The collection contains folowing requests and its test level validations
1. GET request to retrieve all objects
2. GET request to retrieve specific ids (1,5,10)
	- Validate only 3 datas are fetched in response
	- Validate only the IDs [1,5,10] are available in the response
3. POST request to create a new object
	- Validate createdAt property is available in the response data
	- Validate the newly created object properties and values against the request body
4. PUT request to udpate an object based on ID
	- Validate updatedAt property is available in the response data
	- Validate the updated object properties and values against the request body
4. PATCH request to partially update an object based on ID
	- Validate updatedAt property is available in the response data
	- Validate the updated object properties and values against the request body
	- Validate the rest of the object properties and values are unchanged
5. DELETE request to udpate an object based on ID
	- Validate message property to have value "Object with id = {{ID}} has been deleted."

The ID created at scenario #3 is passed on to the subsequent requests.

The following validations are given at Collection level
	- Validate the response status code to be 200
	- Validate the schema of the response data

The {{base_url}} is declared as Collection level variable.

