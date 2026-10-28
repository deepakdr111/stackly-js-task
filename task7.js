// PART 1: ARRAY HIGHER-ORDER METHODS


// 1. forEach() - Print 10 Numbers

{
    let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

    numbers.forEach(number => {
        console.log(number);
    });
}



// 2. map() - Multiply Every Number by 5

{
    let numbers = [2, 4, 6, 8, 10];

    let result = numbers.map(number => number * 5);

    console.log(result); // [10, 20, 30, 40, 50]
}



// 3. filter() - Numbers Greater Than 20

{
    let numbers = [10, 25, 15, 40, 30, 5];

    let result = numbers.filter(number => number > 20);

    console.log(result); // [25, 40, 30]
}



// 4. filter() - Employee Salary <= ₹300,000

{
    let employees = [
        { name: "Deepak", salary: 250000 },
        { name: "Dharshini", salary: 350000 },
        { name: "Kira", salary: 200000 },
        { name: "Eren", salary: 400000 }
    ];

    let result = employees.filter(employee => employee.salary <= 300000);

    console.log(result);
}



// 5. find() - First Salary Greater Than ₹200,000

{
    let employees = [
        { name: "Deepak", salary: 250000 },
        { name: "Dharshini", salary: 350000 },
        { name: "Kira", salary: 200000 },
        { name: "Eren", salary: 400000 }
    ];

    let result = employees.find(employee => employee.salary > 200000);

    console.log(result); // Deepak
}



// 6. reduce() - Total of Numbers

{
    let numbers = [10, 20, 30, 40, 50];

    let total = numbers.reduce((sum, number) => sum + number, 0);

    console.log(total); // 150
}



// 7. some() - At Least One Even Number

{
    let numbers = [1, 3, 5, 8, 9];

    let result = numbers.some(number => number % 2 === 0);

    console.log(result); // true
}



// 8. every() - All Numbers Greater Than Zero

{
    let numbers = [5, 10, 15, 20];

    let result = numbers.every(number => number > 0);

    console.log(result); // true
}



// 9. sort() - Ascending Order

{
    let numbers = [50, 10, 40, 20, 30];

    numbers.sort((a, b) => a - b);

    console.log(numbers); // [10, 20, 30, 40, 50]
}



// 10. sort() - Descending Order

{
    let numbers = [50, 10, 40, 20, 30];

    numbers.sort((a, b) => b - a);

    console.log(numbers); // [50, 40, 30, 20, 10]
}



// PART 2: STRING METHODS



// 11. charAt() - Character at Index 4

{
    let text = "javascript";

    console.log(text.charAt(4)); // s
}



// 12. charCodeAt() - Character Code at Index 2

{
    let text = "javascript";

    console.log(text.charCodeAt(2)); // 118
}



// 13. trim() - Remove Extra Spaces

{
    let text = "   Hello JavaScript   ";

    console.log(text.trim()); // Hello JavaScript
}



// 14. toUpperCase() and toLowerCase()

{
    let text = "JavaScript";

    console.log(text.toUpperCase()); // JAVASCRIPT
    console.log(text.toLowerCase()); // javascript
}



// 15. includes() - Check for "script"

{
    let text = "javascript programming";

    console.log(text.includes("script")); // true
}



// 16. startsWith() and endsWith()

{
    let text = "JavaScript";

    console.log(text.startsWith("Java")); // true
    console.log(text.endsWith("Script")); // true
}



// 17. replaceAll() - Replace Every Occurrence

{
    let text = "java is fun, java is powerful";

    console.log(text.replaceAll("java", "python"));
    // python is fun, python is powerful
}



// 18. split() - Convert String to Array

{
    let text = "html-css-javascript-react";

    let result = text.split("-");

    console.log(result);
    // ["html", "css", "javascript", "react"]
}



// 19. join() - Convert Array to String

{
    let names = ["Deepak", "Dharshini", "Kira", "Eren", "Mikasa"];

    console.log(names.join(", "));
    // Deepak, Dharshini, Kira, Eren, Mikasa
}



// 20. slice() - Extract a Portion

{
    let text = "JavaScript Programming";

    console.log(text.slice(0, 10)); // JavaScript
}



// PART 3: DATE METHODS



// 21. Current Year, Month, Date and Day

{
    let date = new Date();

    console.log("Year:", date.getFullYear());
    console.log("Month:", date.getMonth() + 1);
    console.log("Date:", date.getDate());
    console.log("Day:", date.getDay()); // 0 = Sunday
}



// 22. Display Current Month Name

{
    let months = [
        "January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"
    ];

    let date = new Date();

    console.log("Current Month:", months[date.getMonth()]);
}



// 23. Current Hours, Minutes and Seconds

{
    let date = new Date();

    console.log("Hours:", date.getHours());
    console.log("Minutes:", date.getMinutes());
    console.log("Seconds:", date.getSeconds());
}



// 24. Set Year to 2003, January, Date 30

{
    let date = new Date();

    date.setFullYear(2003);
    date.setMonth(0); // January = 0
    date.setDate(30);

    console.log(date);
}



// PART 4: ASYNCHRONOUS JAVASCRIPT



// 25. setTimeout() - Print After 3 Seconds

{
    setTimeout(() => {
        console.log("Welcome to JavaScript");
    }, 3000);
}



// 26 & 27. setInterval() and clearInterval()

{
    let interval = setInterval(() => {
        console.log("Learning JavaScript");
    }, 2000);

    setTimeout(() => {
        clearInterval(interval);
        console.log("Interval stopped");
    }, 8000);
}



// 28. Observe Asynchronous Output Order

{
    function one() {
        console.log("One");
    }

    function two() {
        console.log("Two");
    }

    function three() {
        console.log("Three");
    }

    one();
    setTimeout(two, 0);
    three();

    // Output:
    // One
    // Three
    // Two
}



// PART 5: PROMISES AND API FETCHING



// 29. Promise - Resolve

{
    let login = new Promise((resolve, reject) => {
        resolve("Login successful");
    });

    login.then(message => {
        console.log(message);
    });
}



// 30. Promise - Reject

{
    let password = new Promise((resolve, reject) => {
        reject("Invalid password");
    });

    password.catch(error => {
        console.log(error);
    });
}



// 31. Promise - finally()

{
    let task = new Promise((resolve, reject) => {
        resolve("Task successful");
    });

    task
        .then(message => console.log(message))
        .catch(error => console.log(error))
        .finally(() => console.log("Process completed"));
}



// 32. Fetch - Print All Product Titles

{
    fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(products => {
            products.forEach(product => {
                console.log(product.title);
            });
        })
        .catch(error => console.warn(error.message));
}



// 33. Fetch - Title, Price and Category

{
    fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(products => {
            products.forEach(product => {
                console.log("Title:", product.title);
                console.log("Price:", product.price);
                console.log("Category:", product.category);
            });
        })
        .catch(error => console.warn(error.message));
}



// 34. Fetch - Handle API Errors

{
    fetch("https://fakestoreapi.com/products")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch products");
            }

            return response.json();
        })
        .then(products => console.log(products))
        .catch(error => console.warn("Error:", error.message));
}



// 35. Fetch - finally()

{
    fetch("https://fakestoreapi.com/products")
        .then(response => {
            if (!response.ok) {
                throw new Error("API request failed");
            }

            return response.json();
        })
        .then(products => console.log(products))
        .catch(error => console.warn("Error:", error.message))
        .finally(() => console.log("API call completed"));
}



// PART 6: REAL-TIME MINI TASKS



// 36. Employee Salary Report

{
    let employees = [
        { name: "Deepak", salary: 250000 },
        { name: "Dharshini", salary: 350000 },
        { name: "Kira", salary: 200000 },
        { name: "Eren", salary: 280000 },
        { name: "Mikasa", salary: 400000 }
    ];

    employees
        .filter(employee => employee.salary < 300000)
        .forEach(employee => {
            console.log(employee.name, employee.salary);
        });
}



// 37. Product Price Calculator

{
    fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(products => {
            let productDetails = products.map(product => ({
                title: product.title,
                price: product.price
            }));

            console.log(productDetails);
        })
        .catch(error => console.warn(error.message));
}



// 38. Product Search by Category

{
    fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(products => {
            let selectedProducts = products.filter(product =>
                product.category === "jewelery"
            );

            console.log(selectedProducts);
        })
        .catch(error => console.warn(error.message));
}



// 39. Number Analysis

{
    let numbers = [5, 10, 15, 20, 25, 30];

    let doubled = numbers.map(number => number * 2);
    let greaterThan15 = numbers.filter(number => number > 15);
    let total = numbers.reduce((sum, number) => sum + number, 0);
    let hasEven = numbers.some(number => number % 2 === 0);
    let allPositive = numbers.every(number => number > 0);

    console.log("Doubled:", doubled);
    console.log("Greater than 15:", greaterThan15);
    console.log("Total:", total);
    console.log("Has even number:", hasEven);
    console.log("All positive:", allPositive);
}



// 40. Product Listing - Complete Fetch

{
    fetch("https://fakestoreapi.com/products")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch products");
            }

            return response.json();
        })
        .then(products => {
            products.forEach(product => {
                console.log("Title:", product.title);
                console.log("Price:", product.price);
                console.log("Category:", product.category);
                console.log("-------------------------");
            });
        })
        .catch(error => {
            console.warn("Error:", error.message);
        })
        .finally(() => {
            console.log("API call completed");
        });
}
