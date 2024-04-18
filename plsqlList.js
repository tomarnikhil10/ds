    var frame = document.getElementById("outputframe")
    document.body.onload = function(){
            frame.innerHTML += right[0].code;
    };


    let left = [
        {
            "id": "Theory",
            "heading": "Basics of PL/SQL",
            "Topics": ["Introduction", "Data Types"]
        },
        {
            "id": "variables",
            "heading": "Variables and Constants",
            "Topics": ["Introduction", "Example Program"]
        },
        {
            "id": "cursors",
            "heading": "Cursors",
            "Topics": ["Introduction", "Implicit Cursors", "Explicit Cursors"]
        },
        {
            "id": "triggers",
            "heading": "Triggers",
            "Topics": ["Introduction", "Example Program"]
        },
        {
            "id": "procedure",
            "heading": "Procedures",
            "Topics": ["Introduction", "Example Program"]
        },
        {
            "id": "functions",
            "heading": "Functions",
            "Topics": ["Introduction", "Example Program"]
        },
        {
            "id": "exception",
            "heading": "Exception Handling",
            "Topics": ["Introduction", "Example Program"]
        }
    ];



    let a = 0;
    document.getElementById("topicsleft").innerHTML = '';
    left.forEach(element => {
        document.getElementById("topicsleft").innerHTML += `<div>
        <a href="#${element.id}">${element.heading}<i class="fa fa-toggle-down" style="padding:0px 10px;"></i></a>
        <div class="sub-menu" id="${element.id}">
        </div>
    </div>`
    element.Topics.forEach(topic => {
        document.getElementById(element.id).innerHTML += `
        <a class="topic" onclick="myfunc(this)" id=${a++}>${topic}</a>
        `
    });
    });
    let right = 
    [
        {
            "code": `<h2>What is PL/SQL?</h2>
            <p>PL/SQL, or Procedural Language/Structured Query Language, is a powerful extension of SQL (Structured Query Language) used for creating stored procedures, functions, triggers, and more within Oracle databases. It combines the flexibility of SQL with the procedural functionality of programming languages like C</p>
            <h2>Fundamentals of PL/SQL :</h2>
            <p><b>Procedural Capabilities :</b> PL/SQL allows developers to write procedural code, enabling them to control the flow of execution, use variables, loops, conditional statements, and exception handling. This makes it more versatile than SQL for complex data manipulation tasks.</p>
            <p><b>Stored Procedures and Functions :</b>  PL/SQL enables the creation of stored procedures and functions, which are named PL/SQL blocks stored in the database. Stored procedures can perform a series of SQL operations and return results, while functions return a single value. These can be reused across different parts of an application, improving code modularity and maintainability.</p>
            <p><b>Triggers :</b> Triggers are PL/SQL blocks associated with tables or views in a database. They automatically execute in response to specific events, such as inserting, updating, or deleting data from the associated table. Triggers are commonly used for enforcing business rules, maintaining data integrity, and auditing changes.</p>
            <p><b>Exception Handling :</b> PL/SQL provides robust mechanisms for handling exceptions that may occur during program execution. Developers can define exception handlers to gracefully handle errors, log information, and ensure the stability of the application.</p>
            <p><b>Variables and Data Types :</b> PL/SQL supports variables and data types similar to most programming languages. Developers can declare variables to hold data temporarily within a PL/SQL block, assigning values and performing operations on them as needed.</p>
            <p><b>Dynamic SQL :</b> PL/SQL allows the execution of dynamic SQL statements, where SQL queries are constructed and executed dynamically at runtime. This flexibility is useful for scenarios where the structure of the SQL statement is not known until runtime, such as building queries based on user input or runtime conditions.</p>
            `,
            "tableRequired": false
        },
        {
            "code": `<h2>Datatypes in PL/SQL?</h2>
            <p>PL/SQL supports various data types that enable developers to work with different kinds of data efficiently. These data types can be categorized into several groups, including scalar data types, composite data types. Here's an overview of some commonly used PL/SQL data types:</p>
            <p><table>
                <tr>
                    <th>Data Type</th>
                    <th>Description</th>
                </tr>
                <tr>
                    <td colspan = "2">Scalar Data Types</td>
                </tr>
                <tr>
                    <td>CHAR/NCHAR</td>
                    <td>Fixed-length character data types, CHAR being space-padded and NCHAR being in Unicode.</td>
                </tr>
                <tr>
                    <td>VARCHAR2/NVARCHAR2</td>
                    <td>Variable-length character data types, with VARCHAR2 being space-efficient and NVARCHAR2 being in Unicode.</td>
                </tr>
                <tr>
                    <td>NUMBER</td>
                    <td>Numeric data type for storing fixed-point or floating-point numbers.</td>
                </tr>
                <tr>
                    <td>DATE</td>
                    <td>Stores date and time information.</td>
                </tr>
                <tr>
                    <td>BOOLEAN</td>
                    <td>Represents Boolean values TRUE, FALSE, and NULL.</td>
                </tr>
                <tr>
                    <td>BINARY_INTEGER/PLS_INTEGER</td>
                    <td>Integer data types for storing whole numbers.</td>
                </tr>
                <tr>
                    <td>FLOAT/REAL</td>
                    <td>Floating-point number data types.</td>
                </tr>
                <tr>
                    <td>RAW</td>
                    <td>Stores binary data.</td>
                </tr>
                <tr>
                    <td>ROWID</td>
                    <td>Stores the unique address of a row in the database table.</td>
                </tr>
                <tr>
                    <td>LONG/RAW</td>
                    <td>Deprecated large object data types.</td>
                </tr>
                <tr>
                    <td colspan = "2">Composite Data Types</td>
                </tr>
                <tr>
                    <td>RECORD</td>
                    <td>A composite data type that can hold multiple fields of different data types.</td>
                </tr>
                <tr>
                    <td>TABLE</td>
                    <td>A collection data type that can hold multiple values of the same data type.</td>
                </tr>
                <tr>
                    <td>VARRAY</td>
                    <td>Variable-size array data type.</td>
                </tr>
                <tr>
                    <td>Nested Table</td>
                    <td>A type of collection that behaves like a database table within a row of another table.</td>
                </tr>
            </table></p>
            `,
            "tableRequired": false
        },
        {
            "code": `<h2>Variables in PL/SQL</h2>
            <p>In PL/SQL, variables are used to store and manipulate data within a program. They can hold various types of data, such as numbers, characters, dates, and more. Here's how you declare and use variables in PL/SQL:</p>
            <h2>Syntax for Variable Declaration :</h2>
            <p>variable_name datatype [NOT NULL := initial_value];</p>
            <h2>Variable Scope :</h2>
            <p>Variables declared in the declaration section are visible within the block where they are declared.</p>
            <p>They can be referenced in subsequent PL/SQL statements within the same block.</p>
            <h2>Initializing Variables :</h2>
            <p>Variables can be initialized with an optional default value using the := assignment operator.</p>
            <p>If a variable is not initialized, it contains a NULL value by default.</p>
            <h2>Syntax for Variable initialization :</h2>
            <p>variable_name := value;</p>
            <h2>Example :</h2>
            <pre>
DECLARE
    num1 NUMBER := 10;
    str1 VARCHAR2(50) := 'Hello, world!';
BEGIN
END;</pre>

             `,
            "tableRequired": false
        },
        {
            "code": `<h2>Program</h2>
            <p>Adding two number variables in PL/SQL:</p>
            <pre>
DECLARE
    num1 NUMBER;
    num2 NUMBER;
    result NUMBER;
BEGIN
    num1 := 10;
    num2 := 20;
    result := num1 + num2;
    dbms_output.put_line('Sum : ' || result);
END;</pre>
            <h2>Output</h2>
            <p>Sum : 30</p>
             `,
            "tableRequired": false
        },
        {
            "code": `<h2>Cursors in PL/SQL</h2>
            <p>In the context of databases and SQL, a cursor is a database object used to retrieve and manipulate data from a result set returned by a SQL query. Cursors provide a way to iterate over the rows of a result set one at a time, enabling programmatic control over data retrieval and manipulation. Here's an explanation of cursors:</p>
            <p>There are two types of Cursors:<br> 1) Implicit Cursors 2) Explicit Cursors</p>
            <h2>Attributes of cursors</h2>
            <p><table>
                <tr>
                    <th>Attribute</th>
                    <th>Description</th>
                </tr>
                <tr>
                    <td>%FOUND</td>
                    <td>Returns TRUE if a fetch operation successfully retrieves a row.</td>
                </tr>
                <tr>
                    <td>%NOTFOUND</td>
                    <td>Returns TRUE if a fetch operation fails to retrieve a row.</td>
                </tr>
                <tr>
                    <td>%ROWCOUNT</td>
                    <td>Returns the number of rows fetched so far.</td>
                </tr>
                <tr>
                    <td>%ISOPEN</td>
                    <td>Returns TRUE if the cursor is open, FALSE if closed.</td>
                </tr>
            </table></p>
            <h2>Basic Functionality :</h2>
            <p><b>Initialization : </b>Cursors are initialized with a SQL query that defines the result set to be processed.</p>
            <p><b>Execution : </b>After initialization, the cursor is executed, and the query is executed against the database to fetch the result set.</p>
            <p><b>Iteration : </b>Cursors allow the program to fetch rows from the result set one at a time. The cursor keeps track of the current position within the result set.</p>
            <p><b>Processing : </b>Each fetched row can be processed individually within the program. This includes reading the values of columns, performing calculations, and executing further logic based on the row's data.</p>
            <p><b>Termination : </b>Cursors are typically closed once all rows in the result set have been processed. Closing the cursor releases associated resources and frees up database server memory.</p>
            <h2>Cursor Operations :</h2>
            <p><b>Opening : </b>The cursor is opened to execute the associated SQL query and fetch the result set.</p>
            <p><b>Fetching : </b> Rows from the result set are retrieved one by one using the FETCH statement. Each fetch operation advances the cursor to the next row.</p>
            <p><b>Closing : </b>Once all rows have been processed, or when no longer needed, the cursor is closed using the CLOSE statement. This releases database resources associated with the cursor.</p>
            
            `,
            "tableRequired": false
        },
        {
            "code": `<h2>Implicit Cursors</h2>
            <p>These cursors are automatically created by the database system for SQL statements that don't explicitly use cursor declarations. They are used for simple queries that return a single result set.</p>
            <h2>Syntax</h2>
            <pre>
BEGIN
    SQL statement; -- The SQL statement that returns a result set
    -- Processing logic here
END;</pre>
            <h2>Example Program</h2>
            <pre>
            <table class="extable"><caption>Example Table : student</caption></table>
            </pre>
            <pre>
DECLARE
    noOfRows number;
BEGIN
    update student set class = 'BCA-II' where marks > 200;
    noOfRows := SQL%ROWCOUNT;
    dbms_output.put_line(noOfRows || ' Rows Updated Successfully');
END;
            </pre>
            <h2>Output</h2>
            <p>3 Rows Updated Successfully</p>
            `,
            "tableRequired": true
        },
        {
            "code": `<h2>Explicit Cursors</h2>
            <p>These cursors are explicitly declared and defined within the PL/SQL code. They provide more control over the result set processing and are suitable for complex queries or scenarios where precise control over data retrieval is required. Explicit cursors are declared using the DECLARE, OPEN, FETCH, and CLOSE statements.</p>
            <h2>Syntax : Declaration</h2>
            <p>CURSOR cursor_name IS statement;</p>
            <h2>Syntax : Opening</h2>
            <p>OPEN cursor_name;</p>
            <h2>Syntax : Fetch</h2>
            <p>FETCH cursor_name INTO variable_name;</p>
            <h2>Syntax : Closing</h2>
            <p>CLOSE cursor_name;</p>
            <h2>Example Program</h2>
            <pre>
            <table class="extable"><caption>Example Table : student</caption></table>
            </pre>
            <pre>
DECLARE
    name student.Name%TYPE;
    CURSOR passed IS SELECT Name FROM student WHERE marks > 250;
BEGIN
    OPEN passed;
    LOOP
        FETCH passed into name;
        EXIT WHEN passed%NOTFOUND;
        dbms_output.put_line(name);
    END LOOP;
    CLOSE passed;
END;</pre>
            <h2>Output</h2>
            <p>Abhishek<br>
            Aman</p>
            `,
            "tableRequired": true
        },
        {
            "code": `<h2>Triggers in PL/SQL</h2>
            <p>Triggers in SQL are special types of stored procedures that are automatically executed or fired when certain events occur in the database. These events can include data manipulation operations like INSERT, UPDATE, DELETE, or DDL (Data Definition Language) operations like CREATE, ALTER, or DROP.</p>
            <p>Triggers can be used to enforce business rules, maintain data integrity, and automate database operations. Here's an overview of triggers:</p>
            <h2>Syntax</h2>
            <pre>
CREATE [OR REPLACE] TRIGGER trigger_name
{BEFORE | AFTER} {INSERT | UPDATE | DELETE | [DDL_EVENT]}
ON table_name
[FOR EACH ROW]
DECLARE
    -- Declarations
BEGIN
    -- Trigger Logic
END;</pre>
            <h2>Trigger Events:</h2>
            <p><table>
                <tr>
                    <th>Event</th>
                    <th>Description</th>
                </tr>
                <tr>
                    <td>INSERT</td>
                    <td>Triggered before or after inserting a new row into a table.</td>
                </tr>
                <tr>
                    <td>UPDATE</td>
                    <td>Triggered before or after updating existing rows in a table.</td>
                </tr>
                <tr>
                    <td>DELETE</td>
                    <td>Triggered before or after deleting rows from a table.</td>
                </tr>
                <tr>
                    <td>CREATE, ALTER, DROP</td>
                    <td>Triggered before or after executing DDL statements.</td>
                </tr>
            </table></p>
            `,
            "tableRequired": false
        },
        {
            "code": `<h2>Example Program</h2>
            <p>Program to show the working of Triggers</p>
            <h2>Program</h2>
            <pre>
            <table class="extable"><caption>Example Table : student</caption></table>
            </pre>
            <pre>
CREATE OR REPLACE TRIGGER cstud  
BEFORE UPDATE ON student 
fOR EACH ROW 
BEGIN 
    IF :NEW.Marks > 300 THEN 
        :NEW.Marks := :OLD.Marks;
        dbms_output.put_line('Marks should be less than 300!'); 
    END IF; 
END; </pre>
<h2>Output</h2>
            <p>TRIGGER CREATED</p>
            <h2>Executing Trigger</h2>           
<pre>BEGIN 
    UPDATE student SET Marks = 345 where RollNo = '4204'; 
END;</pre>
            <h2>Output</h2>
            <p>Marks should be less than 300!</p>
            `,
            "tableRequired": true
        },
        {
            "code": `<h2>Precedures in PL/SQL</h2>
            <p>In PL/SQL, a procedure is a named block of code that performs a specific task or set of tasks. It can accept input parameters, execute SQL statements, and return output parameters or a result set. Procedures provide modularity and reusability in code by encapsulating a sequence of statements into a single unit. Here's an overview of procedures in PL/SQL:</p>
            <h2>Syntax for Creating</h2>
            <pre>
CREATE [OR REPLACE] PROCEDURE procedure_name
    (parameter1 datatype1, parameter2 datatype2, ...)
IS
    -- Declarations
BEGIN
    -- Procedure Logic
    -- SQL Statements
END procedure_name;</pre>
            <h2>Syntax for Executing</h2>
            <p>procedure_name(value1, value2, ...);</p>
            `,
            "tableRequired": false
        },
        {
            "code": `<h2>Example Program</h2>
            <p>Program to show the working of Procedures</p>
            <h2>Example of a Simple Procedure</h2>
            <pre>
            <table class="extable"><caption>Example Table : student</caption></table>
            </pre>
            <pre>
CREATE OR REPLACE PROCEDURE get_Student
    (varrollNo IN student.rollNO%TYPE)
IS
    var_name student.Name%TYPE;
    var_marks student.Marks%TYPE;
BEGIN
    SELECT Name, Marks
    INTO var_name, var_marks
    FROM student
    WHERE rollNo = varrollNo;

    DBMS_OUTPUT.PUT_LINE('Student Name: ' || var_name);
    DBMS_OUTPUT.PUT_LINE('Student Marks: ' || var_marks);
END get_Student; </pre>
<h2>Output</h2>
            <p>Procedure created.</p>
            <h2>Executing Procedure get_Student</h2>           
<pre>BEGIN 
    get_Student('4201'); 
END;</pre>
            <h2>Output</h2>
            <p>Student Name: Abhishek<br>Student Marks: 296</p>
            `,
            "tableRequired": true
        },
        {
            "code": `<h2>Functions in PL/SQL</h2>
            <p>In PL/SQL, functions are named PL/SQL blocks that can accept parameters, perform a specific task, and return a value. They are similar to procedures but differ in that they always return a single value. Functions are often used to encapsulate reusable logic and calculations, making code more modular and easier to maintain. Here's an overview of functions in PL/SQL:</p>
            <h2>Syntax for Creating</h2>
            <pre>
CREATE [OR REPLACE] FUNCTION function_name
    (parameter1 datatype1, parameter2 datatype2, ...)
RETURN return_datatype
IS
    -- Declarations
BEGIN
    -- Logic
    RETURN value_to_return;
END;</pre>
            <h2>Syntax for Calling</h2>
            <p>function_name(value1, value2, ...);</p>
            `,
            "tableRequired": false
        },
        {
            "code": `<h2>Example Program</h2>
            <p>Program to show the working of Functions</p>
            <h2>Example of a Simple Function</h2>
            <pre>
            <table class="extable"><caption>Example Table : student</caption></table>
            </pre>
            <pre>
CREATE OR REPLACE Function getName
    (varrollNo IN student.rollNO%TYPE)
RETURN student.Name%TYPE
IS
    var_name student.Name%TYPE;
BEGIN
    SELECT Name INTO var_name FROM student WHERE rollNo = varrollNo;
    RETURN var_name;
END; </pre>
<h2>Output</h2>
            <p>Function created.</p>
            <h2>Executing Procedure get_Student</h2>           
<pre>BEGIN 
    dbms_output.put_line('Name of Student : ' || getName('4201')); 
END;</pre>
            <h2>Output</h2>
            <p>Name of Student : Abhishek</p>
            `,
            "tableRequired": true
        },
        {
            "code": `<h2>Exception Handling in PL/SQL</h2>
            <p>Exception handling in PL/SQL allows you to handle errors gracefully and maintain control over the flow of your program. It enables you to catch and handle errors that occur during the execution of your code. Here's an overview of exception handling in PL/SQL:</p>
            <h2>Types of Exceptions : </h2>
            <p><b>Predefined Exceptions:</b> These are exceptions defined by Oracle that are raised automatically when specific errors occur. Examples include ZERO_DIVIDE, TOO_MANY_ROWS, and NO_DATA_FOUND.</p>
            <p><b>User-Defined Exceptions:</b> These are exceptions defined by the programmer to handle specific conditions or errors within the program.</p>
            <h2>Syntax</h2>
            <pre>
BEGIN
    -- PL/SQL block
EXCEPTION
    WHEN exception1 THEN
        -- Handling code for exception1
    WHEN exception2 THEN
        -- Handling code for exception2
    WHEN OTHERS THEN
        -- Handling code for any other unhandled exception
END;</pre>
            `,
            "tableRequired": false
        },
        {
            "code": `<h2>Example Program</h2>
            <p>Let's consider a simple PL/SQL block that performs division and handles the ZERO_DIVIDE predefined exception:</p>
            <pre>
DECLARE
    numerator NUMBER := 10;
    denominator NUMBER := 0;
    result NUMBER;
BEGIN
    result := numerator / denominator;
    DBMS_OUTPUT.PUT_LINE('Result of division: ' || result);
EXCEPTION
    WHEN ZERO_DIVIDE THEN
        DBMS_OUTPUT.PUT_LINE('Error: Division by zero');
    WHEN OTHERS THEN
        DBMS_OUTPUT.PUT_LINE('Error: An unexpected error occurred');
END;</pre>
<h2>Output</h2>

        <p>Error: Division by zero</p>`,
            
            "tableRequired": false
        },
    ]


    function myfunc(a) {
        frame.innerHTML = right[a.id].code;
        if (right[a.id].tableRequired) {
            document.querySelectorAll(".extable").forEach(element => {
                element.innerHTML += StudentData();
            });
            document.querySelectorAll(".custTable").forEach(element => {
                element.innerHTML += CustomerData();
            });
            document.querySelectorAll(".orderTable").forEach(element => {
                element.innerHTML += OrderData();
            });
        }
    }

    function StudentData(){
        return `
        <tr>
            <th>RollNo</th>
            <th>Name</th>
            <th>PhoneNo</th>
            <th>Class</th>
            <th>Marks</th>
            <th>City</th>
        </tr>
        <tr>
            <td>4201</td>
            <td>Abhishek</td>
            <td>9688258565</td>
            <td>BCA-I</td>
            <td>296</td>
            <td>Chandigarh</td>
        </tr>
        <tr>
            <td>4202</td>
            <td>Anjali</td>
            <td>7812569871</td>
            <td>BCA-I</td>
            <td>246</td>
            <td>Punjab</td>
        </tr>
        <tr>
            <td>4203</td>
            <td>Aman</td>
            <td>7639927794</td>
            <td>BCA-I</td>
            <td>286</td>
            <td>Punjab</td>
        </tr>
        <tr>
            <td>4204</td>
            <td>Asha</td>
            <td>6259927794</td>
            <td>BCA-I</td>
            <td>156</td>
            <td>Haryana</td>
        </tr>`
    }
    function CustomerData(){
        return `
        <tr>
            <th>customerID</th>
            <th>CustomerName</th>
            <th>ContactNo</th>
            <th>Country</th>
        </tr>
        <tr>
            <td>1</td>
            <td>Abhishek</td>
            <td>6283659862</td>
            <td>Germany</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Anjali</td>
            <td>7812569871</td>
            <td>Mexico</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Aman</td>
            <td>7639927794</td>
            <td>Mexico</td>
        </tr>`
    }
    function OrderData(){
        return `
        <tr>
            <th>OrderID</th>
            <th>customerId</th>
            <th>OrderDate</th>
        </tr>
        <tr>
            <td>10308</td>
            <td>2</td>
            <td>1996-09-18</td>
        </tr>
        <tr>
            <td>10309</td>
            <td>37</td>
            <td>1996-09-19</td>
        </tr>
        <tr>
            <td>10310</td>
            <td>77</td>
            <td>1996-09-20</td>
        </tr>`
    }