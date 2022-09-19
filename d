[33mcommit 110e3d502b389f0accf2f914dc4f61c8655f369e[m[33m ([m[1;36mHEAD -> [m[1;32mdaria-task3[m[33m)[m
Merge: 6d621a3 6089157
Author: dariacucicovscaia <91362775+dariacucicovscaia@users.noreply.github.com>
Date:   Mon Sep 19 19:03:17 2022 +0300

    Merge branch 'daria-task3' of https://github.com/deniscuciuc/library-frontend into daria-task3
    
    # Conflicts:
    #       src/App.js
    #       src/assets/styles/authors.css
    #       src/assets/styles/profile.css
    #       src/components/auth/ChangePasswordNotification.js
    #       src/components/auth/RefreshToken.js
    #       src/components/books/BookAdminTable.jsx
    #       src/components/books/BookItem.jsx
    #       src/components/books/BookList.jsx
    #       src/components/home/HomeContent.jsx
    #       src/components/login/ForgotPassword.jsx
    #       src/components/login/LoginForm.jsx
    #       src/components/login/ResetPassword.jsx
    #       src/components/logout/Logout.jsx
    #       src/components/profile/ProfileAuth.jsx
    #       src/components/profile/ProfileBooks.jsx
    #       src/components/profile/ProfileHeader.jsx
    #       src/components/profile/ProfileInfo.jsx
    #       src/components/registration/RegistrationForm.jsx
    #       src/components/user/Admin.js
    #       src/components/user/Users.js
    #       src/config/routes.js
    #       src/redux/actions/book.js
    #       src/redux/actions/login.js
    #       src/redux/actions/user.js
    #       src/redux/reducers/login.js
    #       src/redux/reducers/rootReducer.js
    #       src/redux/reducers/user.js

[33mcommit 6d621a30c1b3f983cb3662d34d824b50d325af5a[m
Author: dariacucicovscaia <91362775+dariacucicovscaia@users.noreply.github.com>
Date:   Mon Sep 19 18:51:17 2022 +0300

    insert book with an existing Category and Author

[1mdiff --git a/.vscode/settings.json b/.vscode/settings.json[m
[1mnew file mode 100644[m
[1mindex 0000000..23fd35f[m
[1m--- /dev/null[m
[1m+++ b/.vscode/settings.json[m
[36m@@ -0,0 +1,3 @@[m
[32m+[m[32m{[m
[32m+[m[32m    "editor.formatOnSave": true[m
[32m+[m[32m}[m
\ No newline at end of file[m
[1mdiff --git a/src/config/routes.js b/src/config/routes.js[m
[1mindex dd728c5..28b98ce 100644[m
[1m--- a/src/config/routes.js[m
[1m+++ b/src/config/routes.js[m
[36m@@ -1,5 +1,7 @@[m
 export const routes = {[m
[31m-    BASIC_URL: process.env.REACT_APP_API_BASE_URL,[m
[32m+[m[32m    //process.env.REACT_APP_API_BASE_URL[m
[32m+[m[32m    BASIC_URL: "http://localhost:8080/",[m
[32m+[m
     BASIC_PATH: "api/",[m
     LOGIN_URL: "login",[m
     REGISTRATION_URL: "sign-up",[m
[36m@@ -7,7 +9,7 @@[m [mexport const routes = {[m
     PROFILE_DATA: "profile/get/",[m
     DELETE_USER: "user/delete/",[m
     UPDATE_USER: "user/update/",[m
[31m-    CREATE_USER : "user/create",[m
[32m+[m[32m    CREATE_USER: "user/create",[m
     ALL_USERS: "user/users",[m
     ALL_BOOKS: "book/books",[m
     ALL_AUTHORS: "author/authors",[m
[36m@@ -26,9 +28,10 @@[m [mexport const routes = {[m
     RETURN_THE_BOOK: "book/returnTheBook",[m
     CLIENT_DATA: "user/find-by-email/",[m
     CONFIRM_EMAIL_BY_TOKEN: "email-confirmation/confirm/",[m
[31m-    CHANGE_PASSWORD : "user/change-password/",[m
[32m+[m[32m    CHANGE_PASSWORD: "user/change-password/",[m
     FORGOT_PASSWORD: "user/forgotPassword",[m
     GET_USERS_BY_CRITERIA: "user/find_users_by_criteria",[m
     UPDATE_PASSWORD: "user/forgotPassword/changePassword/",[m
[31m-    SEND_NEW_CONFIRMATION_TOKEN: "email-confirmation/send-new-token/"[m
[32m+[m[32m    SEND_NEW_CONFIRMATION_TOKEN: "email-confirmation/send-new-token/",[m
[32m+[m[32m    INSERT_BOOK_WITH_EXISTING_CATEGORY_AND_DATA: "book/addBookWithExistingCategoryAndAuthor"[m
 }[m
\ No newline at end of file[m
[1mdiff --git a/src/redux/actions/book.js b/src/redux/actions/book.js[m
[1mindex 47041f2..9932b37 100644[m
[1m--- a/src/redux/actions/book.js[m
[1m+++ b/src/redux/actions/book.js[m
[36m@@ -1,19 +1,20 @@[m
[31m-import {routes} from "../../config/routes";[m
[31m-import {HttpService} from "../../services/httpService";[m
[32m+[m[32mimport { routes } from "../../config/routes";[m
[32m+[m[32mimport { HttpService } from "../../services/httpService";[m
 [m
 [m
 [m
 export const bookActions = {[m
[31m-    BOOK_LIST : "BOOK_LIST",[m
[31m-    RESERVED_BOOK : "RESERVED_BOOK",[m
[31m-    BOOKS_BY_CRITERIA : "BOOKS_BY_CRITERIA",[m
[31m-    GET_BOOKS_BY_CATEGORY:"GET_BOOKS_BY_CATEGORY",[m
[31m-    GET_BOOKS_BY_AUTHOR :"GET_BOOKS_BY_AUTHOR",[m
[32m+[m[32m    BOOK_LIST: "BOOK_LIST",[m
[32m+[m[32m    RESERVED_BOOK: "RESERVED_BOOK",[m
[32m+[m[32m    BOOKS_BY_CRITERIA: "BOOKS_BY_CRITERIA",[m
[32m+[m[32m    GET_BOOKS_BY_CATEGORY: "GET_BOOKS_BY_CATEGORY",[m
[32m+[m[32m    GET_BOOKS_BY_AUTHOR: "GET_BOOKS_BY_AUTHOR",[m
     DELETE_BOOK: "DELETE_BOOK",[m
     INSERT_BOOK: "INSERT_BOOK",[m
[31m-    GET_USER_BOOKS:"GET_USER_BOOKS",[m
[31m-    GIVE_BOOK : "GIVE_BOOK",[m
[31m-    RETURN_BOOK : "RETURN_BOOK"[m
[32m+[m[32m    GET_USER_BOOKS: "GET_USER_BOOKS",[m
[32m+[m[32m    GIVE_BOOK: "GIVE_BOOK",[m
[32m+[m[32m    RETURN_BOOK: "RETURN_BOOK",[m
[32m+[m[32m    INSERT_BOOK_WITH_EXISTING_CATEGORY_AND_DATA: "INSERT_BOOK_WITH_EXISTING_CATEGORY_AND_DATA"[m
 [m
 };[m
 [m
[36m@@ -22,8 +23,8 @@[m [mexport const fetchBookList = () => (dispatch) => {[m
 [m
     return HttpService.get(url).then(response => {[m
         return dispatch({[m
[31m-            type : bookActions.BOOK_LIST,[m
[31m-            payload : response[m
[32m+[m[32m            type: bookActions.BOOK_LIST,[m
[32m+[m[32m            payload: response[m
         });[m
     });[m
 };[m
[36m@@ -53,14 +54,14 @@[m [mexport const searchBooks = (criteria) => (dispatch) => {[m
     });[m
 }[m
 [m
[31m-export const getBooksByCategory = ( categoryId) => (dispatch) => {[m
[32m+[m[32mexport const getBooksByCategory = (categoryId) => (dispatch) => {[m
 [m
     const url = routes.BASIC_URL + routes.BASIC_PATH + routes.GET_BOOKS_BY_CATEGORY + "/" + categoryId;[m
 [m
     return HttpService.get(url).then(response => {[m
         return dispatch({[m
[31m-            type : bookActions.GET_BOOKS_BY_CATEGORY,[m
[31m-            payload : response[m
[32m+[m[32m            type: bookActions.GET_BOOKS_BY_CATEGORY,[m
[32m+[m[32m            payload: response[m
         });[m
     });[m
 };[m
[36m@@ -70,13 +71,13 @@[m [mexport const getBooksByAuthor = (authorId) => (dispatch) => {[m
 [m
     return HttpService.get(url).then(response => {[m
         return dispatch({[m
[31m-            type : bookActions.GET_BOOKS_BY_AUTHOR,[m
[31m-            payload : response[m
[32m+[m[32m            type: bookActions.GET_BOOKS_BY_AUTHOR,[m
[32m+[m[32m            payload: response[m
         });[m
     });[m
 };[m
 [m
[31m-export const deleteBook  = (id) => (dispatch) => {[m
[32m+[m[32mexport const deleteBook = (id) => (dispatch) => {[m
     const url = routes.BASIC_URL + routes.BASIC_PATH + routes.DELETE_BOOK + id;[m
 [m
     return HttpService.delete(url).then(response => {[m
[36m@@ -88,8 +89,8 @@[m [mexport const deleteBook  = (id) => (dispatch) => {[m
     });[m
 [m
 };[m
[31m-export const insertBook  = (bookData) => (dispatch) => {[m
[31m-    const url = routes.BASIC_URL + routes.BASIC_PATH + routes.INSERT_BOOK ;[m
[32m+[m[32mexport const insertBook = (bookData) => (dispatch) => {[m
[32m+[m[32m    const url = routes.BASIC_URL + routes.BASIC_PATH + routes.INSERT_BOOK;[m
 [m
     return HttpService.post(url, bookData).then(response => {[m
         return dispatch({[m
[36m@@ -98,15 +99,26 @@[m [mexport const insertBook  = (bookData) => (dispatch) => {[m
         });[m
     });[m
 [m
[32m+[m[32m};[m
[32m+[m[32mexport const insertBookWithExistingCategoryAndAuthor = (bookData, categoryId, authorId) => (dispatch) => {[m
[32m+[m[32m    const url = routes.BASIC_URL + routes.BASIC_PATH + routes.INSERT_BOOK_WITH_EXISTING_CATEGORY_AND_DATA + "/" + categoryId + "/" + authorId;[m
[32m+[m