# Bookstore Application

This is the backend for a fictional bookstore application.

There are two types of users: the admin user and the regular user.


# *The 'admin' user has the following privileges:*

* To add a new book to the database.

* To view all books in the database.

* To fetch a particular book in the database.

* To update the book information for a book in the database.

* To delete a book from the database.


# *The 'regular' user has the following privileges:*

* To view all books in the database.

* To fetch a particular book in the database.


# *Here are the list of access routes.*


* To visit the application homepage, simply go to https://fast-crag-44109.herokuapp.com/ .


* To signup as a user, send a JSON POST request conataining the following information structured as a JSON object:
    {
        "firstName": "Your first name",
        "lastName": "Your last name",
        "username": "Your preferred username",
        "password": "Your preferred password"
    }
 to https://fast-crag-44109.herokuapp.com/signup .


* After signup, login using your signup credentials by sending a JSON POST request containing the following information structured as a JSON object:
    {
        "username": "Your previously chosen username",
        "password": "Your previously chosen password"
    }
to https://fast-crag-44109.herokuapp.com/login . Make sure you keep your token, as it would be used to complete your other interactions with the database.


* To see a comprehensive list of all the books in the database, send a JSON GET request to https://fast-crag-44109.herokuapp.com/books and include your token as part of your request in the format "Bearer <token>".


* To fetch a single book from the list by id, send a JSON GET request to https://fast-crag-44109.herokuapp.com/books/:id and include your token as part of your request in the format "Bearer <token>". You can get the id from the FETCH ALL BOOKS request.