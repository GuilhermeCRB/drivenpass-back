# <p align = "center"> Drivenpass Project </p>

<p align="center">
   <img width="20%" src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f512.svg"/>
</p>

<p align = "center">
   <img src="https://img.shields.io/badge/author-Guilherme_Barros-4dae71?style=flat-square" />
   <img src="https://img.shields.io/github/languages/count/GuilhermeCRB/drivenpass-back?color=4dae71&style=flat-square" />
</p>


##  :clipboard: Description

Have you ever tried to remember a password and just couldn't do it? And after spend a few minutes on the impossible task just gave up and had to do the annoying "change your password" process or even exceeding your credit card password attempts? Then this app is made specially for you! YAY!
No more 423421562 passwords to memorize, now you just need to remember one! Just try not to forget this one too, please! :sweat_smile:

***

## :computer:	 Technologies and Concepts

- Node.js
- TypeScript
- PostegresSQL with Prisma
- JWT

***

## :rocket: Routes

```yml
POST /sign-up
    - Route to sign up
    - headers: {}
    - body:{
        "email": "lorem@gmail.com",
        "passsword": "loremipsum"
}
```
    
```yml 
POST /sign-in
    - Route to sign in
    - headers: {}
    - body: {
        "email": "lorem@gmail.com",
        "passsword": "loremipsum"
    }
```
    
```yml 
POST /wi-fi (authenticated)
    - Route to save all your wi-fi networks
    - headers: { "Authorization": "Bearer $token" }
    - body: {
        "label": "loremipsum",
        "name": "loremipsum",
        "passsword": "loremipsum"
    }
```

```yml
GET /wi-fi?id (authenticated)
    - Route to get all your wi-fi networks or just a specific one
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
``` 

```yml
DELETE /wi-fi/:id (authenticated)
    - Route to delete a wi-fi network
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

```yml 
POST /cards (authenticated)
    - Route to save all your cards information
    - headers: { "Authorization": "Bearer $token" }
    - body: {
        "number": "11111111111",
        "label": "loremipsum",
        "name": "loremipsum est",
        "cvv": "111",
        "expiringDate": "11/11",
        "password": "loremipsum",
        "isVirtual": boolean,
        "typeId": number (1 - Credit card/ 2 - Debit/3 - Credit and Debit card)
    }
```

```yml
GET /cards?id (authenticated)
    - Route to get all your cards information or just a specific one
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
``` 

```yml
DELETE /cards/:id (authenticated)
    - Route to delete a card information
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

```yml 
POST /safe-notes (authenticated)
    - Route to save safe notes
    - headers: { "Authorization": "Bearer $token" }
    - body: {
        "label": "loremipsum",
        "note": "loremipsum",
    }
```

```yml
GET /safe-notes?id (authenticated)
    - Route to get all your safe notes or just a specific one
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
``` 

```yml
DELETE /safe-notes/:id (authenticated)
    - Route to delete a safe note
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

```yml 
POST /credentials (authenticated)
    - Route to save credentials
    - headers: { "Authorization": "Bearer $token" }
    - body: {
        "label": "loremipsum",
        "url": "https://www.loremipsum.com",
        "userName": "loremipsum",
        "password": "loremipsum"
    }
```

```yml
GET /credentials?id (authenticated)
    - Route to get all your credentials or just a specific one
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
``` 

```yml
DELETE /credentials/:id (authenticated)
    - Route to delete a credential
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```
***

## 🏁 Running the application

Certify yourself that you have the latest stable version of [Node.js](https://nodejs.org/en/download/) and [npm](https://www.npmjs.com/) running locally.

First, clone this repository to your local machine:

```
git clone https://github.com/luanalessa/projeto-backend.git
```

then, inside the application folder, run the following coomand to install dependencies.

```
npm install
```

Finally, just start your server
```
npm start
```
