# CUTE USERS

We have now added a `user.txt` file. We can think of this as our first step into working with a database. 

You will need to start handling `/users/:id` routes (i.e. `req.url === /users/1`). 

You will need to read from the `user.txt` file and work parse it (think about turning it into object). Once you have parsed it, you can find the object that has the id === `:id` of the url.

You will need to have a html file to display their name and their avatar. You will need to think about how you might be able to dynamically add the user's data to your html? A simple way could be to replace some kind of placeholder?

# CUTE USERS UPDATED

1. List all of the users on the homepage and make sure that you can link to each of their individual profiles from their entry in the list
2. Add a link on the homepage to /users/new - on which page there should be a form that allows you to create a new user
3. Add a button on your profile pages that, when clicked, deletes that user and redirects to the homepage
4. Make sure that if a user with a particular ID doesn't exist, and appropriate page is displayed.
5. Add a little form on the profile page that allows you to update a user's avatar image url
6. Turns out that our app, designed for cats, is being used by all sorts of other animals. Create a command line utility that checks what animal is in the image (https://developer.clarifai.com/) of each of our users and, if a user isn't a cat, deletes that 'user'
7. We should probably be checking whether someone is trying to add a non-cat using the users/new form, and not add them to the database if so.
8. Maybe we should have some sort of early warning system. If someone tries to upload a dog, perhaps we should get a notification in a slack channel. Create your own slack team and work out how you might do this.
9. Perhaps we should also get a text message? Look at the Twilio API to see if can do this.

Some hints for you:

What happens when you submit a form? Google it.
How will you structure your API?
How will you talk to the Clarifai service?
Have you written code that would be useful for 6 and 7 in a separate, reusable module?
What is the best status code to send back?
When you're handling the creation or update of a user, how can we get hold of the data that's being sent from the browser? Clue: the request object inherits from event emitter - I wonder what events it emits?
Do we want to emit our own 'dogSubmissionAttempt' event to deal with 8 and 9?

