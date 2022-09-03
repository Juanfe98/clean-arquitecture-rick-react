# Clean Architecture Explinations

## Folder Structure

### Api

First, we have the api folder, which will contain the API Layer of our application. It will have methods
that are responsible for performing API requests and communicating with a server.

### Components

The only initial directory in this example is common . The common directory will contain any reusable
components that are commonly used throughout the application. For instance, buttons, form components,
components related to typography, and so on. Any components that are not as common would be placed
inside of components but outside of the common directory

### hooks

would hold any custom and reusable hooks. Note that any hooks that are not really reusable, but are 
coupled to a specific feature, should be placed in the same directory as that feature. For instance, 
imagine we have a newsletter form component that contains a form to sign up a user for a newsletter. 
This component could utilise a hook called useNewsletterSignup that would handle signing up a user. 
A hook like this shouldn’t be placed in the global src/hooks directory, but rather locally, as it 
is coupled to the NewsletterForm component. 

Here’s what it couldlook like:

```
src
  |-- hooks
  |-- components
    |-- common
    |-- NewsletterForm
      |-- hooks
        |-- useNewsletterSignup.ts
      |-- NewsletterForm.tsx

```

### Context

The context directory should contain any global-level context state providers. 

### Constants

Here you can put any constant variables that are used throughout the application. It’s a good practice
to capitalise your constants to distinguish them from other variables and localised constants in your app.

### helpers

Any utilities and small reusable functions should go here - for example, functions to format date, time,etc.

### Services

In larger applications, we might have complex business logic code that is used in a few different places.
A code like this is a good candidate to be extracted from components and placed somewhere else, and
the services folder is a good candidate for that.

### store

The store folder is responsible for files related to global state management. There are many state
management solutions that can be used for React projects, such as Redux, Zustand, Jotai, and many
many more

### Views

Read page 28 to 32 from React - The road to enterprise
