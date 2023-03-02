# NestJS REST API sample
### Financial manager to monitor your finances

Run ```docker-compose-up``` to start a project


### Tables
- banks
- categories
- transactions
- transaction_to_categories

### Routes
- ### Banks:
```http
# Get all banks
GET /banks HTTP/1.1

Response:
[
  {
    "id": "string",
    "name": "string",
    "balance": 0
  }
]
```

```http
# Get one bank by id
GET /banks/:id HTTP/1.1

Response:
{
  "id": "string",
  "name": "string",
  "balance": 0
}
```
```http
# Create new bank
POST /banks HTTP/1.1

Request: 
{
  "name": "string"
}

Response:
{
  "message": "string",
  "id": "string"
}
```
```http
# Update bank
PUT /banks/:id HTTP/1.1

Request: 
{
  "name": "string"
}

Response:
{
  "message": "string",
  "id": "string"
}
```
```http
# Delete bank
DELETE /banks/:id HTTP/1.1

Response:
{
  "message": "string",
  "id": "string"
}
```

- ### Categories:
```http
# Get all categories
GET /categories HTTP/1.1

Response:
[
  {
    "id": "string",
    "name": "string"
  }
]
```
```http
# Get one category by id
GET /categories/:id HTTP/1.1

Response:
{
  "id": "string",
  "name": "string"
}
```
```http
# Create new category
POST /categories HTTP/1.1

Request: 
{
  "name": "string"
}

Response:
{
  "message": "string",
  "id": "string"
}
```
```http
# Update category
PUT /categories/:id HTTP/1.1

Request: 
{
  "name": "string"
}

Response:
{
  "message": "string",
  "id": "string"
}
```
```http
# Delete category
DELETE /categories/:id HTTP/1.1

Response:
{
  "message": "string",
  "id": "string"
}
```

- ### Transactions:
```http
# Get all transactions with optional pagination
GET /transactions HTTP/1.1

Query params:
{
  "perPage": "string", # items per page
  "pageNo": "string"  # number of page
}

Response:
[
  {
    "count": 0,
    "data": {
      "id": "string",
      "amount": "string",
      "type": "PROFITABLE",
      "bankId": "string"
    }
  }
]
```
```http
# Create new transaction
POST /transactions HTTP/1.1

Request: 
{
  "amount": 0,
  "bankId": "string",
  "categoryIds": [
    "string"
  ]
}

Response:
{
  "message": "string",
  "id": "string"
}
```
```http
# Delete transaction
DELETE /transactions/:id HTTP/1.1

Response:
{
  "message": "string",
  "id": "string"
}
```
- ### Statistics:
```http
# Get all categories` statistics
POST /statistics HTTP/1.1

Request: 
{
  "categoryIds": [
    "string"
  ],
  "fromPeriod": "YYYY-MM-DD",
  "toPeriod": "YYYY-MM-DD"
}

Response:
[
  {
    "categoryName": 0
  }
]
```
- ### Webhooks:
```http
# Create new transaction via webhook
POST /webhooks/transactions HTTP/1.1

Request: 
{
  "amount": 0,
  "bankId": "string",
  "categoryIds": [
    "string"
  ]
}

Response:
{
  "message": "string"
}

```