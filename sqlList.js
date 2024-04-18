var frame = document.getElementById("outputframe")
document.body.onload = function(){
        frame.innerHTML += right[0].code;
};


let left = [
    {
        "id": "Theory",
        "heading": "Basics of MySQL",
        "Topics": ["Introduction", "Data Types"]
    },
    {
        "id": "Database",
        "heading": "Database",
        "Topics": ["Create Database", "Show Database", "Drop Database", "Use Database"]
    },
    {
        "id": "Table",
        "heading": "Table",
        "Topics": ["Create Table", "Show Tables", "Describe Table", "Drop Table"]
    },
    {
        "id": "Alter",
        "heading": "Alter",
        "Topics": ["Add Column", "Drop Column", "Updating Column"]
    },
    {
        "id": "Insert",
        "heading": "Insert",
        "Topics": ["Inserting Values into a Table"]
    },
    {
        "id": "Delete",
        "heading": "Delete",
        "Topics": ["Deleting Row from a Table"]
    },
    {
        "id": "Update",
        "heading": "Update",
        "Topics": ["Updating value"]
    },
    {
        "id": "Select",
        "heading": "Select",
        "Topics": ["Getting Values from a Table", "Conditional retrieval of rows", "Matching a pattern from a table"]
    },
    {
        "id": "Clauses",
        "heading": "Clauses",
        "Topics": ["Group by", "Order by", "Limit", "Offset"]
    },
    {
        "id": "Views",
        "heading": "Views",
        "Topics": ["Introduction" ,"Creating View", "Deleting View"]
    },
    {
        "id": "Privileges",
        "heading": "Managing Privileges",
        "Topics": ["Grant", "Revoke"]
    },
    {
        "id": "Transactions",
        "heading": "Transaction Management",
        "Topics": ["Introduction", "Example"]
    },
    {
        "id": "Joins",
        "heading": "Joins",
        "Topics": ["Equi Joins", "Cartesian Join", "Outer Joins", "Self Joins"]
    },  
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
let right = [
    {
        "code": `<h2>What is MySQL?</h2>
        <p>SQL, or Structured Query Language, is a powerful programming language designed for managing and manipulating
            relational databases. Developed in the 1970s, SQL has become the standard language for interacting with
            databases, providing a standardized way to perform tasks such as querying data, updating records, and defining
            database structures.</p>
        <h2>Key Concepts of SQL:</h2>
        <p><b><u>Data Definition Language (DDL):</u></b> DDL commands enable users to define and manage the structure of a
            database. This includes creating and altering database objects such as tables, indexes, and constraints.</p>
        <p><b>Data Manipulation Language (DML):</b> SQL includes commands for querying and modifying data within a
            database. Common DML commands include SELECT (retrieve data), INSERT (add new records), UPDATE (modify existing
            records), and DELETE (remove records).</p>
        <p><b>Control Language (DCL):</b> DCL commands govern access to the database. They include commands such as GRANT
            (assign privileges) and REVOKE (remove privileges), which control who can access and manipulate data within the
            database.</p>`,
        "tableRequired": false
    },
    {
        "code": `<h2>Data Types in SQL</h2>
        <p>In SQL, data types are used to specify the type of data that can be stored in a column of a table. Each column in a table must have a specific data type, which defines the kind of values that can be inserted into that column. SQL supports a wide range of data types, each designed to accommodate different types of data and optimize storage efficiency.</p>
        <h2>Common data types in SQL:</h2>
        <p>
        <table>
            <tr>
                <th>Data Type<th>
                <th>Description<th>
            </tr>
            <tr>
                <td>CHAR(size)<td>
                <td>A FIXED length string (can contain letters, numbers, and special characters). The size parameter specifies the column length in characters - can be from 0 to 255. Default is 1<td>
            </tr>
            <tr>
                <td>VARCHAR(size)<td>
                <td>A VARIABLE length string (can contain letters, numbers, and special characters). The size parameter specifies the maximum column length in characters - can be from 0 to 65535<td>
            </tr>
            <tr>
                <td>TEXT(size)<td>
                <td>Holds a string with a maximum length of 65,535 bytes<td>
            </tr>
            <tr>
                <td>TINYINT(size)<td>
                <td>A very small integer. Signed range is from -128 to 127. Unsigned range is from 0 to 255. The size parameter specifies the maximum display width (which is 255)<td>
            </tr>
            <tr>
                <td>BOOL<td>
                <td>Zero is considered as false, nonzero values are considered as true.<td>
            </tr>
            <tr>
                <td>INT(size)<td>
                <td>A medium integer. Signed range is from -2147483648 to 2147483647. Unsigned range is from 0 to 4294967295. The size parameter specifies the maximum display width (which is 255)<td>
            </tr>
            <tr>
                <td>BIGINT(size)<td>
                <td>A large integer. Signed range is from -9223372036854775808 to 9223372036854775807. Unsigned range is from 0 to 18446744073709551615. The size parameter specifies the maximum display width (which is 255)<td>
            </tr>
            <tr>
                <td>FLOAT(p)<td>
                <td>A floating point number. MySQL uses the p value to determine whether to use FLOAT or DOUBLE for the resulting data type. If p is from 0 to 24, the data type becomes FLOAT(). If p is from 25 to 53, the data type becomes DOUBLE()<td>
            </tr>
            <tr>
                <td>DOUBLE(size, d)<td>
                <td>A normal-size floating point number. The total number of digits is specified in size. The number of digits after the decimal point is specified in the d parameter<td>
            </tr>
            <tr>
                <td>DECIMAL(size, d)<td>
                <td>An exact fixed-point number. The total number of digits is specified in size. The number of digits after the decimal point is specified in the d parameter. The maximum number for size is 65. The maximum number for d is 30. The default value for size is 10. The default value for d is 0.<td>
            </tr>
            <tr>
                <td>DATE<td>
                <td>A date. Format: YYYY-MM-DD. The supported range is from '1000-01-01' to '9999-12-31'<td>
            </tr>
            <tr>
                <td>YEAR<td>
                <td>	A year in four-digit format. Values allowed in four-digit format: 1901 to 2155, and 0000.
                MySQL 8.0 does not support year in two-digit format.<td>
            </tr>
        </table></p>
        `,
        "tableRequired": false
    },
    {
        "code": `
        <h2>Creating Databases</h2>
        <p>To create a new database in MySQL, you can use the CREATE DATABASE statement followed by the name of the database you want to create. Here's the basic syntax:</p>
        <h2>Syntax</h2>
        <p>
            <code>CREATE DATABASE database_name;</code>
        </p>
        <p>Replace database_name with the name you want to give to your new database. Here's an example of creating a database named School:</p>
        <h2>Query</h2>
        <p>
            <code>CREATE DATABASE school;</code><br><br>
            Query OK, 1 row affected (0.02 sec)
        </p>
        `,
        "tableRequired": false
    },
    {
        "code": `
        <h2>Showing Databases</h2>
        <p>To show the list of databases in MySQL, you can use the SHOW DATABASES; command. Here's how you would do it:</p>
        <h2>Query</h2>
        <p>
            <code>SHOW DATABASES;</code>
            <table>
                <tr>
                    <th>Database</th>
                </tr>
                <tr>
                    <td>information_schema</td>
                </tr>
                <tr>
                    <td>mysql</td>
                </tr>
                <tr>
                    <td>performance_schema</td>
                </tr>
                <tr>
                    <td>school</td>
                </tr>
                <tr>
                    <td>sys</td>
                </tr>
            </table>
        </p>
        <p><b>Note:- </b>We have created database named school rest all are created by default.</p>
        `,
        "tableRequired": false
    },
    {
        "code":`<h2>Dropping Database</h2>
        <p>To drop (delete) a database in MySQL, you can use the following SQL statement:</p>
        <h2>Syntax</h2>
        <p>
            <code>DROP DATABASE database_name;</code>
        </p>
        <p>Replace database_name with the name of the database you want to delete. Here's an example of deleting a database named school:</p>
        <h2>Query</h2>
        <p>
            <code>DROP DATABASE school;</code><br><br>
            Query OK, 0 rows affected (0.14 sec)<br><br>
            <code>SHOW DATABASES;</code><br><br>
            <table>
                <tr>
                    <th>Database</th>
                </tr>
                <tr>
                    <td>information_schema</td>
                </tr>
                <tr>
                    <td>mysql</td>
                </tr>
                <tr>
                    <td>performance_schema</td>
                </tr>
                <tr>
                    <td>sys</td>
                </tr>
            </table>
        </p>`
        
        ,"tableRequired":false
    },
    {
        "code":`<h2>Using Database</h2>
        <p>To use a database in MySQL, you can use the following SQL statement:</p>
        <h2>Syntax</h2>
        <p>
            <code>USE database_name;</code>
        </p>
        <p>Replace database_name with the name of the database you want to use(make sure it is available). Here's an example of using a database named school:</p>
        <h2>Query</h2>
        <p>
        <code>SHOW DATABASES;</code>
        <table>
            <tr>
                <th>Database</th>
            </tr>
            <tr>
                <td>information_schema</td>
            </tr>
            <tr>
                <td>mysql</td>
            </tr>
            <tr>
                <td>performance_schema</td>
            </tr>
            <tr>
                <td>school</td>
            </tr>
            <tr>
                <td>sys</td>
            </tr>
        </table>
            <code>USE school;</code><br><br>
            <code>Database changed</code>
        </p>
        `
        ,"tableRequired":false
    },
    {
        "code":`<h2>Creating Table</h2>
        <p>To create a table in MySQL, you can use the following SQL statement:</p>
        <h2>Syntax</h2>
        <p>
            CREATE TABLE table_name (
                column1 datatype constraints,
                column2 datatype constraints,
                ...
            );
            
        </p>
        <p>
        table_name: This is the name of the table you want to create.<br><br>

        (column1, column2, ...): These are the names of the columns in the table.<br><br>

        datatype: Specifies the data type for each column. Examples include INT, VARCHAR, DATE, etc.<br><br>

        constraints: Optional constraints that enforce rules or conditions on the data in the columns, such as PRIMARY KEY, NOT NULL, UNIQUE, FOREIGN KEY, etc.<br><br>
        Here's an example of creating a simple table named student with three columns:</p>
        <h2>Query</h2>
        <p>
            USE school;<br><br>
            Database changed<br><br>
            CREATE TABLE student (
                RollNo INT PRIMARY KEY,
                Name VARCHAR(50),
                PhoneNo VARCHAR(10)
            );<br><br>Query OK, 0 rows affected (0.16 sec)
        </p>
        `
        ,"tableRequired":false
    },
    {
        "code": `
        <h2>Showing Tables</h2>
        <p>To show the list of tables in a particular database of MySQL, you can use the SHOW TABLES; command. Here's how you would do it:</p>
        <h2>Syntax</h2>
        <p>
            <code>SHOW TABLES;</code>
        </p>
        <h2>Query</h2>
        <p>
            <code>USE school;</code><br><br>
            Database changed<br><br>
            <code>SHOW TABLES;</code>
            <table>
                <tr>
                    <th>Tables_in_school</th>
                </tr>
                <tr>
                    <td>student</td>
                </tr>
                <tr>
                    <td>course</td>
                </tr>
            </table>
        </p>
        `,
        "tableRequired": false
    },
    {
        "code": `
        <h2>Describe Tables</h2>
        <p>In MySQL, you can use the DESCRIBE or DESC command to display information about the structure of a table, including column names, data types, and constraints. Both DESCRIBE and DESC are equivalent and can be used interchangeably. Here's how you would use them:</p>
        <h2>Syntax</h2>
        <p>
            <code>DESCRIBE table_name;</code><br><br>
            Or<br><br>
            <code>DESC table_name;</code>
        </p>
        <h2>Query</h2>
        <p>
            <code>USE school;</code><br><br>
            Database changed<br><br>
            <code>DESC student;</code>
            <table>
                <tr>
                    <th>Field</th>
                    <th>Type</th>
                    <th>Null</th>
                    <th>Key</th>
                    <th>Default</th>
                    <th>Extra</th>
                </tr>
                <tr>
                    <td>RollNo</td>
                    <td>int</td>
                    <td>NO</td>
                    <td>PRI</td>
                    <td>NULL</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Name</td>
                    <td>varchar(50)</td>
                    <td>YES</td>
                    <td></td>
                    <td>NULL</td>
                    <td></td>
                </tr>
                <tr>
                    <td>PhoneNo</td>
                    <td>varchar(10)</td>
                    <td>YES</td>
                    <td></td>
                    <td>NULL</td>
                    <td></td>
                </tr>
            </table>
        </p>
        `,
        "tableRequired": false
    },
    {
        "code": `
        <h2>Droping Tables</h2>
        <p>To drop a table in MySQL, you use the DROP TABLE statement followed by the name of the table you want to delete. Here's the basic syntax:</p>
        <h2>Syntax</h2>
        <p>
            <code>DROP TABLE table_name;</code>
        </p>
        <h2>Query</h2>
        <p>
            <code>USE school;</code><br><br>
            Database changed<br><br>
            <code>SHOW TABLES;</code>
            <table>
                <tr>
                    <th>Tables_in_school</th>
                </tr>
                <tr>
                    <td>student</td>
                </tr>
                <tr>
                    <td>course</td>
                </tr>
                <tr>
                    <td>temporary</td>
                </tr>
            </table>
            <code>DROP TABLE temporary;</code><br><br>
            Query OK, 0 rows affected (0.08 sec)
        </p>
        `,
        "tableRequired": false
    },
    {
        "code": `
        <h2>Adding New Columns To Tables</h2>
        <p>To add a new column to an existing table in MySQL, you can use the ALTER TABLE statement followed by the ADD COLUMN clause. Here's the basic syntax:</p>
        <h2>Syntax</h2>
        <p>
            <code>ALTER TABLE table_name ADD COLUMN column_name datatype [constraints];</code>
        </p>
        <h2>Query</h2>
        <p>
            <code>ALTER TABLE student ADD COLUMN DOB date;<br><br>
            Query OK, 0 rows affected (0.13 sec)<br>
            Records: 0  Duplicates: 0  Warnings: 0<br><br>
            </code>
            <code>DESC student;</code>
            <table>
                <tr>
                    <th>Field</th>
                    <th>Type</th>
                    <th>Null</th>
                    <th>Key</th>
                    <th>Default</th>
                    <th>Extra</th>
                </tr>
                <tr>
                    <td>RollNo</td>
                    <td>int</td>
                    <td>NO</td>
                    <td>PRI</td>
                    <td>NULL</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Name</td>
                    <td>varchar(50)</td>
                    <td>YES</td>
                    <td></td>
                    <td>NULL</td>
                    <td></td>
                </tr>
                <tr>
                    <td>PhoneNo</td>
                    <td>varchar(10)</td>
                    <td>YES</td>
                    <td></td>
                    <td>NULL</td>
                    <td></td>
                </tr>
                <tr>
                    <td>DOB</td>
                    <td>date</td>
                    <td>YES</td>
                    <td></td>
                    <td>NULL</td>
                    <td></td>
                </tr>
            </table>
        </p>
        `,
        "tableRequired": false
    },
    {
        "code": `
        <h2>Droping Columns From Tables</h2>
        <p>To drop (remove) a column from an existing table in MySQL, you use the ALTER TABLE statement with the DROP COLUMN clause. Here's the basic syntax:</p>
        <h2>Syntax</h2>
        <p>
            <code>ALTER TABLE table_name DROP COLUMN column_name;</code>
        </p>
        <h2>Query</h2>
        <p>
            <code>ALTER TABLE student DROP COLUMN DOB;<br><br>
            Query OK, 0 rows affected (0.17 sec)<br>
            Records: 0  Duplicates: 0  Warnings: 0<br><br>
            </code>
            <code>DESC student;</code>
            <table>
                <tr>
                    <th>Field</th>
                    <th>Type</th>
                    <th>Null</th>
                    <th>Key</th>
                    <th>Default</th>
                    <th>Extra</th>
                </tr>
                <tr>
                    <td>RollNo</td>
                    <td>int</td>
                    <td>NO</td>
                    <td>PRI</td>
                    <td>NULL</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Name</td>
                    <td>varchar(50)</td>
                    <td>YES</td>
                    <td></td>
                    <td>NULL</td>
                    <td></td>
                </tr>
                <tr>
                    <td>PhoneNo</td>
                    <td>varchar(10)</td>
                    <td>YES</td>
                    <td></td>
                    <td>NULL</td>
                    <td></td>
                </tr>
            </table>
        </p>
        `,
        "tableRequired": false
    },
    {
        "code": `
        <h2>Updating Columns of Tables</h2>
        <p>To update (modify) a column in an existing table in MySQL, you can use the ALTER TABLE statement with the MODIFY COLUMN clause. Here's the basic syntax:</p>
        <h2>Syntax</h2>
        <p>
            <code>ALTER TABLE table_name MODIFY COLUMN column_name new_datatype [new_constraints];</code>
        </p>
        <h2>Query</h2>
        <p>
            <code>DESC student;</code>
            <table>
                <tr>
                    <th>Field</th>
                    <th>Type</th>
                    <th>Null</th>
                    <th>Key</th>
                    <th>Default</th>
                    <th>Extra</th>
                </tr>
                <tr>
                    <td>RollNo</td>
                    <td>int</td>
                    <td>NO</td>
                    <td>PRI</td>
                    <td>NULL</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Name</td>
                    <td>varchar(50)</td>
                    <td>YES</td>
                    <td></td>
                    <td>NULL</td>
                    <td></td>
                </tr>
                <tr>
                    <td>PhoneNo</td>
                    <td>varchar(10)</td>
                    <td>YES</td>
                    <td></td>
                    <td>NULL</td>
                    <td></td>
                </tr>
            </table>
            <code>ALTER TABLE student MODIFY COLUMN RollNo varchar(10);<br><br>
            Query OK, 0 rows affected (0.10 sec)<br>
            Records: 0  Duplicates: 0  Warnings: 0<br><br>
            </code>
            <code>DESC student;</code>
            <table>
                <tr>
                    <th>Field</th>
                    <th>Type</th>
                    <th>Null</th>
                    <th>Key</th>
                    <th>Default</th>
                    <th>Extra</th>
                </tr>
                <tr>
                    <td>RollNo</td>
                    <td>varchar(10)</td>
                    <td>NO</td>
                    <td>PRI</td>
                    <td>NULL</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Name</td>
                    <td>varchar(50)</td>
                    <td>YES</td>
                    <td></td>
                    <td>NULL</td>
                    <td></td>
                </tr>
                <tr>
                    <td>PhoneNo</td>
                    <td>varchar(10)</td>
                    <td>YES</td>
                    <td></td>
                    <td>NULL</td>
                    <td></td>
                </tr>
            </table>
        </p>
        `,
        "tableRequired": false
    },
    {
        "code":` <h2>Inserting value into Table</h2>
        <p>To insert data into a MySQL table, you use the INSERT INTO statement. Here's the basic syntax:</p>
        <h2>Syntax</h2>
        <div class="dark">
            <h2>Inserting all values of a row</h2>
            <p>
                <code>INSERT INTO table_name VALUES (value1, value2, ...);</code>
            </p>
            <h2>Inserting particular values of a row</h2>
            <p>
                <code>INSERT INTO table_name(column1, column3, ...) VALUES (value1, value3, ... );</code>
            </p>
            <h2>Inserting Multiple rows</h2>
            <p>
                <code>INSERT INTO table_name VALUES (value1, value2, ...), (value1, value2, ...), (value1, value2, ...);</code>
            </p>
        </div>
        <pre>
            <table>
                <caption>Example Table : student</caption>
                <tr>
                    <th>RollNo</th>
                    <th>Name</th>
                    <th>PhoneNo</th>
                </tr>
            </table>
        </pre>
        <h2>Query</h2>
        <p>INSERT INTO student VALUES ('4201', "Abhishek", "9688258565");
        <table>
            <tr>
                <th>RollNo</th>
                <th>Name</th>
                <th>PhoneNo</th>
            </tr>
            <tr>
                <td>4201</td>
                <td>Abhishek</td>
                <td>9688258565</td>
            </tr>
        </table>
    </p>
        <p>INSERT INTO student(RollNo, Name) VALUES ('4202', "Anjali");
        <table>
            <tr>
                <th>RollNo</th>
                <th>Name</th>
                <th>PhoneNo</th>
            </tr>
            <tr>
                <td>4201</td>
                <td>Abhishek</td>
                <td>9688258565</td>
            </tr>
            <tr>
                <td>4202</td>
                <td>Anjali</td>
                <td>NULL</td>
            </tr>
        </table>
        <p>INSERT INTO student VALUES ('4203', "Aman", "7639927794"), ('4204', "Asha", "6259927794");
        <table>
            <tr>
                <th>RollNo</th>
                <th>Name</th>
                <th>PhoneNo</th>
            </tr>
            <tr>
                <td>4201</td>
                <td>Abhishek</td>
                <td>9688258565</td>
            </tr>
            <tr>
                <td>4202</td>
                <td>Anjali</td>
                <td>NULL</td>
            </tr>
            <tr>
                <td>4203</td>
                <td>Aman</td>
                <td>7639927794</td>
            </tr>
            <tr>
                <td>4204</td>
                <td>Asha</td>
                <td>6259927794</td>
            </tr>
        </table>
    </p>`,
    "tableRequired" : false
    },
    {
        "code":` <h2>Deleting Row(s) from Table</h2>
        <p>To delete data from a MySQL table, you use the DELETE FROM statement. Here's the basic syntax:</p>
        <h2>Syntax</h2>
        <div class="dark">
            <h2>Deleting all rows</h2>
            <p>
                <code>DELETE FROM table_name;</code>
            </p>
            <h2>Deleting a particular row</h2>
            <p>
                <code>DELETE FROM table_name WHERE condition;</code>
            </p>
        </div>
        <p>
        <table>
            <caption>Example Table : student</caption>
            <tr>
                <th>RollNo</th>
                <th>Name</th>
                <th>PhoneNo</th>
            </tr>
            <tr>
                <td>4201</td>
                <td>Abhishek</td>
                <td>9688258565</td>
            </tr>
            <tr>
                <td>4202</td>
                <td>Anjali</td>
                <td>NULL</td>
            </tr>
            <tr>
                <td>4203</td>
                <td>Aman</td>
                <td>7639927794</td>
            </tr>
            <tr>
                <td>4204</td>
                <td>Asha</td>
                <td>6259927794</td>
            </tr>
            </table>
        </p>
        <h2>Query</h2>
        <p>DELETE FROM student WHERE rollNo = "4202";
        <table>
            <tr>
                <th>RollNo</th>
                <th>Name</th>
                <th>PhoneNo</th>
            </tr>
            <tr>
                <td>4201</td>
                <td>Abhishek</td>
                <td>9688258565</td>
            </tr>
            <tr>
                <td>4203</td>
                <td>Aman</td>
                <td>7639927794</td>
            </tr>
            <tr>
                <td>4204</td>
                <td>Asha</td>
                <td>6259927794</td>
            </tr>
        </table>
    </p>
        <p>DELETE FROM student;
        <table>
            <tr>
                <th>RollNo</th>
                <th>Name</th>
                <th>PhoneNo</th>
            </tr>
        </table>
    </p>`,
    "tableRequired" : false
    },
    {
        "code":` <h2>Updating values</h2>
        <p>To update data in a MySQL table, you use the UPDATE statement. Here's the basic syntax:</p>
        <h2>Syntax</h2>
        <div class="dark">
            <h2>Updating a value of column(s)</h2>
            <p>
                <code>UPDATE table_name SET column1 = value1, column2 = value2, ...;</code>
            </p>
            <h2>Updating a value of particular columns</h2>
            <p>
                <code>UPDATE table_name SET column1 = value1, column2 = value2, ... WHERE condition;</code>
            </p>
        </div>
        <p>
        <table>
            <caption>Example Table : student</caption>
            <tr>
                <th>RollNo</th>
                <th>Name</th>
                <th>PhoneNo</th>
                <th>Class</th>
            </tr>
            <tr>
                <td>4201</td>
                <td>Abhishek</td>
                <td>9688258565</td>
                <td>NULL</td>
            </tr>
            <tr>
                <td>4202</td>
                <td>Anjali</td>
                <td>NULL</td>
                <td>NULL</td>
            </tr>
            <tr>
                <td>4203</td>
                <td>Aman</td>
                <td>7639927794</td>
                <td>NULL</td>
            </tr>
            <tr>
                <td>4204</td>
                <td>Asha</td>
                <td>6259927794</td>
                <td>NULL</td>
            </tr>
            </table>
        </p>
        <h2>Query</h2>
        <p>UPDATE student SET class = 'BCA-I';
        <table>
            <tr>
                <th>RollNo</th>
                <th>Name</th>
                <th>PhoneNo</th>
                <th>Class</th>
            </tr>
            <tr>
                <td>4201</td>
                <td>Abhishek</td>
                <td>9688258565</td>
                <td>BCA-I</td>
            </tr>
            <tr>
                <td>4202</td>
                <td>Anjali</td>
                <td>NULL</td>
                <td>BCA-I</td>
            </tr>
            <tr>
                <td>4203</td>
                <td>Aman</td>
                <td>7639927794</td>
                <td>BCA-I</td>
            </tr>
            <tr>
                <td>4204</td>
                <td>Asha</td>
                <td>6259927794</td>
                <td>BCA-I</td>
            </tr>
        </table>
    </p>
        <p>UPDATE table_name SET PhoneNo = '7812569871' WHERE RollNo = '4202';
        <table>
            <tr>
                <th>RollNo</th>
                <th>Name</th>
                <th>PhoneNo</th>
                <th>Class</th>
            </tr>
            <tr>
                <td>4201</td>
                <td>Abhishek</td>
                <td>9688258565</td>
                <td>BCA-I</td>
            </tr>
            <tr>
                <td>4202</td>
                <td>Anjali</td>
                <td>7812569871</td>
                <td>BCA-I</td>
            </tr>
            <tr>
                <td>4203</td>
                <td>Aman</td>
                <td>7639927794</td>
                <td>BCA-I</td>
            </tr>
            <tr>
                <td>4204</td>
                <td>Asha</td>
                <td>6259927794</td>
                <td>BCA-I</td>
            </tr>
        </table>
    </p>`,
    "tableRequired" : false
    },
    {
        "code":` <h2>Selecting values</h2>
        <p>To select data from a MySQL table, you use the SELECT statement. Here's the basic syntax:</p>
        <h2>Syntax</h2>
        <div class="dark">
            <h2>Selecting values of particular column(s)</h2>
            <p>
                <code>SELECT column1, column2, ... FROM table_name;</code>
            </p>
            <h2>Selecting values of every column</h2>
            <p>
                <code>SELECT * FROM table_name;</code>
            </p>
        </div>
        <p>
        <table class="extable">
        <caption>Example Table : student</caption>
        </table>
        </p>
        <h2>Query</h2>
        <p>SELECT Name, PhoneNo FROM student;
        <table>
            <tr>
                <th>Name</th>
                <th>PhoneNo</th>
            </tr>
            <tr>
                <td>Abhishek</td>
                <td>9688258565</td>
            </tr>
            <tr>
                <td>Anjali</td>
                <td>7812569871</td>
            </tr>
            <tr>
                <td>Aman</td>
                <td>7639927794</td>
            </tr>
            <tr>
                <td>Asha</td>
                <td>6259927794</td>
            </tr>
        </table>
    </p>
        <p>SELECT * FROM student;
        <table class="extable">
        
        </table>
    </p>`,
    "tableRequired" : true,
    },
    {
        "code":` <h2>Conditional Retrievel of rows</h2>
        <p>To retrieve rows from a MySQL table based on specific conditions, you can use the SELECT statement along with the WHERE clause. The WHERE clause allows you to specify conditions that filter the rows returned by the query. Here's how you can use it:</p>
        <h2>Syntax</h2>
        <p>
            <code>SELECT column1, column2, ... FROM table_name WHERE condition;</code>
        </p>
        <p>
            <table>
                <caption>Comparison Operators</caption>
                <tr>
                    <th>Operator</th>
                    <th>Description</th>
                </tr>
                <tr>
                    <td>=</td>
                    <td>Equal to</td>
                </tr>
                <tr>
                    <td>!= or <></td>
                    <td>Not equal to</td>
                </tr>
                <tr>
                    <td><</td>
                    <td>Less than</td>
                </tr>
                <tr>
                    <td>></td>
                    <td>Greater than</td>
                </tr>
                <tr>
                    <td><=</td>
                    <td>Less than or equal to</td>
                </tr>
                <tr>
                    <td>>=</td>
                    <td>Greater than or equal to</td>
                </tr>
            </table>
            <table>
                <caption>Logical Operators</caption>
                <tr>
                    <th>Operator</th>
                    <th>Description</th>
                </tr>
                <tr>
                    <td>AND</td>
                    <td>Logical AND</td>
                </tr>
                <tr>
                    <td>OR</td>
                    <td>Logical OR</td>
                </tr>
                <tr>
                    <td>NOT</td>
                    <td>Logical NOT</td>
                </tr>
            </table>
            <table>
                <caption>Special Operators</caption>
                <tr>
                    <th>Operator</th>
                    <th>Description</th>
                </tr>
                <tr>
                    <td>IN</td>
                    <td>Used to specify multiple values in a WHERE clause.</td>
                </tr>
                <tr>
                    <td>BETWEEN</td>
                    <td>Used to specify a range of values in a WHERE clause.</td>
                </tr>
                <tr>
                    <td>IS NULL</td>
                    <td>Used to check for NULL values in a column.</td>
                </tr>
            </table>
        </p>
        <p>
        <table class="extable">
            <caption>Example Table : student</caption>
        </table>
        </p>
        <h2>Query</h2>
        <p>SELECT Name, Marks FROM student WHERE RollNo = "4202";
        <table>
            <tr>
                <th>Name</th>
                <th>Marks</th>
            </tr>
            <tr>
                <td>Anjali</td>
                <td>246<td>
            </tr>
        </table></p>
        <p>SELECT Name, Marks FROM student WHERE RollNo != "4202";
        <table>
            <tr>
                <th>Name</th>
                <th>Marks</th>
            </tr>
            <tr>
                <td>Abhishek</td>
                <td>296<td>
            </tr>
            <tr>
                <td>Aman</td>
                <td>286<td>
            </tr>
            <tr>
                <td>Asha</td>
                <td>156<td>
            </tr>
        </table></p>
        <p>SELECT Name, Marks FROM student WHERE Marks<246;
        <table>
            <tr>
                <th>Name</th>
                <th>Marks</th>
            </tr>
            <tr>
                <td>Asha</td>
                <td>156<td>
            </tr>
        </table></p>
            <p>SELECT Name, Marks FROM student WHERE Marks>286;
        <table>
            <tr>
                <th>Name</th>
                <th>Marks</th>
            </tr>
            <tr>
                <td>Abhishek</td>
                <td>296<td>
            </tr>
        </table></p>
        <p>SELECT Name, Marks FROM student WHERE Marks<=246;
        <table>
            <tr>
                <th>Name</th>
                <th>Marks</th>
            </tr>
            <tr>
                <td>Asha</td>
                <td>156<td>
            </tr>
            <tr>
                <td>Anjali</td>
                <td>246<td>
            </tr>
        </table>
        </p>
        <p>SELECT Name, Marks FROM student WHERE Marks>=286;
        <table>
            <tr>
                <th>Name</th>
                <th>Marks</th>
            </tr>
            <tr>
                <td>Abhishek</td>
                <td>296<td>
            </tr>
            <tr>
                <td>Aman</td>
                <td>286<td>
            </tr>
        </table></p>
        <p>SELECT Name, Marks FROM student WHERE name = "Abhishek" and Marks>=286;
        <table>
            <tr>
                <th>Name</th>
                <th>Marks</th>
            </tr>
            <tr>
                <td>Abhishek</td>
                <td>296<td>
            </tr>
        </table>
        </p>
        <p>SELECT Name, Marks FROM student WHERE name = "Abhishek" or Marks=286;
        <table>
            <tr>
                <th>Name</th>
                <th>Marks</th>
            </tr>
            <tr>
                <td>Abhishek</td>
                <td>296<td>
            </tr>
            <tr>
                <td>Aman</td>
                <td>286<td>
            </tr>
        </table>
        </p>
        <p>SELECT Name, Marks FROM student WHERE RollNo in("4201", "4203");
        <table>
            <tr>
                <th>Name</th>
                <th>Marks</th>
            </tr>
            <tr>
                <td>Abhishek</td>
                <td>296<td>
            </tr>
            <tr>
                <td>Aman</td>
                <td>286<td>
            </tr>
        </table>
        </p>
        <p>SELECT Name, Marks FROM student WHERE marks between 100 and 200;
        <table>
            <tr>
                <th>Name</th>
                <th>Marks</th>
            </tr>
            <tr>
                <td>Asha</td>
                <td>156<td>
            </tr>
        </table>
        </p>
    `,
    "tableRequired" : true,
    },
    {
        "code":` <h2>String Pattern Matching in MySQL</h2>
        <p>In MySQL, you can use the LIKE operator along with wildcard characters to match patterns in strings. Here's how you can use it:</p>
        <h2>Syntax</h2>
        <p>
            <code>SELECT * FROM table_name WHERE column_name LIKE 'pattern';</code>
        </p>
        <p>
            <table>
                <tr>
                    <th>character</th>
                    <th>Description</th>
                </tr>
                <tr>
                    <td>% (Percent)</td>
                    <td>Represents zero or more characters</td>
                </tr
                <tr>
                    <td>_ (Underscore)</td>
                    <td>Represents a single character</td>
                </tr>
            </table>
        </p>
        <p>
        <table class="extable">
            <caption>Example Table : student</caption>
        </table>
        </p>
        <h2>Query</h2>
        <p>SELECT Name, PhoneNo FROM student WHERE PhoneNo LIKE "7%";
        <table>
            <tr>
                <th>Name</th>
                <th>PhoneNo</th>
            </tr>
            <tr>
                <td>Anjali</td>
                <td>7812569871</td>
            </tr>
            <tr>
                <td>Aman</td>
                <td>7639927794</td>
            </tr>
        </table></p>
        <p>SELECT Name, PhoneNo FROM student WHERE PhoneNo LIKE "A_h%";
        <table>
            <tr>
                <th>Name</th>
                <th>PhoneNo</th>
            </tr>
            <tr>
                <td>Abhishek</td>
                <td>9688258565</td>
            </tr>
            <tr>
                <td>Asha</td>
                <td>6259927794</td>
            </tr>
        </table></p>
        `,
    "tableRequired" : true,
    },
    {
        "code":` <h2>Grouping the retrieved values</h2>
        <p>In MySQL, the GROUP BY clause is used in conjunction with aggregate functions to group rows that have the same values into summary rows. It's commonly used to perform aggregate functions like COUNT, SUM, AVG, MAX, or MIN on groups of data. Here's the basic syntax:</p>
        <h2>Syntax</h2>
        <p>
            <code>SELECT column1, aggregate_function(column2) FROM table_name GROUP BY column1;</code>
        </p>
        <p>Additionally, you can use the HAVING clause to filter groups based on aggregate conditions. The HAVING clause is similar to the WHERE clause but is applied after the GROUP BY operation.</p>
        <p>
            <code>SELECT column1, aggregate_function(column2) FROM table_name GROUP BY column1 HAVING condition;</code>
        </p>
        <p>
        <table class="extable">
            <caption>Example Table : student</caption>
        </table>
        </p>
        <h2>Query</h2>
        <p>SELECT City, count(*) as No_of_students FROM student GROUP BY City;
        <table>
            <tr>
                <th>City</th>
                <th>No_of_students</th>
            </tr>
            <tr>
                <td>Chandigarh</td>
                <td>1</td>
            </tr>
            <tr>
                <td>Punjab</td>
                <td>2</td>
            </tr>
            <tr>
                <td>Haryana</td>
                <td>1</td>
            </tr>
        </table>
        <p>SELECT City, count(*) as No_of_students FROM student GROUP BY City Having count(city) < 2;
        <table>
            <tr>
                <th>City</th>
                <th>No_of_students</th>
            </tr>
            <tr>
                <td>Chandigarh</td>
                <td>1</td>
            </tr>
            <tr>
                <td>Haryana</td>
                <td>1</td>
            </tr>
        </table>
       </p>
        `,
    "tableRequired" : true,
    },
    {
        "code":` <h2>Ordering the results</h2>
        <p>In MySQL, the ORDER BY clause is used to sort the result set of a query based on one or more columns. It allows you to specify the order in which the rows should be returned. Here's the basic syntax:</p>
        <h2>Syntax</h2>
        <p>
            <code>SELECT column1, column2, ... FROM table_name ORDER BY column1 [ASC | DESC], column2 [ASC | DESC], ...;</code>
        </p>
        <p>
        <table class="extable">
            <caption>Example Table : student</caption>
        </table>
        </p>
        <h2>Query</h2>
        <p>SELECT Distinct City FROM student ORDER BY City ASC;
        <table>
            <tr>
                <th>City</th>
            </tr>
            <tr>
                <td>Chandigarh</td>
            </tr>
            <tr>
                <td>Haryana</td>
            </tr>
            <tr>
                <td>Punjab</td>
            </tr>
        </table>
        <p>SELECT Distinct City FROM student ORDER BY City DESC;
        <table>
            <tr>
                <th>City</th>
            </tr>
            <tr>
                <td>Punjab</td>
            </tr>
            <tr>
                <td>Haryana</td>
            </tr>
            <tr>
                <td>Chandigarh</td>
            </tr>
        </table>
       </p>
        `,
    "tableRequired" : true,
    },
    {
        "code":` <h2>Limiting the results to particular number of rows</h2>
        <p>In MySQL, the LIMIT clause is used to restrict the number of rows returned by a query. It is commonly used to retrieve a subset of rows from a result set, especially when dealing with large datasets. Here's the basic syntax:</p>
        <h2>Syntax</h2>
        <p>
            <code>SELECT column1, column2, ... FROM table_name LIMIT number_of_rows;</code>
        </p>
        <p>
        <table class="extable">
            <caption>Example Table : student</caption>
        </table>
        </p>
        <h2>Query</h2>
        <p>SELECT * FROM student LIMIT 2;
        <table>
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
        </table>
        </p>
        `,
    "tableRequired" : true,
    },
    {
        "code":` <h2>OFFSET - Clause</h2>
        <p>In MySQL, the OFFSET clause is used in conjunction with the LIMIT clause to specify the number of rows to skip before starting to return rows from the result set. It's commonly used for pagination, where you want to retrieve a subset of rows starting from a specific position in the result set. Here's the basic syntax:</p>
        <h2>Syntax</h2>
        <p>
            <code>SELECT column1, column2, ... FROM table_name LIMIT number_of_rows OFFSET offset_value;</code>
        </p>
        <p>
        <table class="extable">
            <caption>Example Table : student</caption>
        </table>
        </p>
        <h2>Query</h2>
        <p>SELECT * FROM student LIMIT 1 OFFSET 1;
        <table>
            <tr>
                <th>RollNo</th>
                <th>Name</th>
                <th>PhoneNo</th>
                <th>Class</th>
                <th>Marks</th>
                <th>City</th>
            </tr>
            <tr>
                <td>4202</td>
                <td>Anjali</td>
                <td>7812569871</td>
                <td>BCA-I</td>
                <td>246</td>
                <td>Punjab</td>
            </tr>
        </table>
        </p>
        `,
        "tableRequired" : true,
    },
    {
        "code": `<h2>What is Views?</h2>
        <p>In databases, a view is a virtual table that is based on the result set of a SELECT query. Unlike physical tables, views do not store data themselves; they are essentially saved queries that dynamically generate the result set when queried. Views can simplify complex queries, abstract the underlying data model, and provide a security mechanism by restricting access to certain columns or rows of a table.</p>
        <h2>Key Points of Views:</h2>
        <p><b><u>Structure:</u></b> Views have a structure similar to tables, with columns and rows, but they do not store any data directly.</p>
        <p><b><u>Virtual:</u></b> Views are virtual tables, meaning they are not physical entities and do not occupy storage space.</p>
        <p><b><u>Schema Binding:</u></b> Views can be schema-bound, meaning they are bound to the schema of the underlying tables. This ensures that the underlying schema cannot be modified in a way that would break the view.</p>
        <p><b><u>Security:</u></b> Views can be used to control access to data by providing a restricted view of the underlying tables. Users can be granted access to views without granting direct access to the underlying tables.</p>
        <p><b><u>Complex Queries:</u></b> Views can simplify complex queries by encapsulating logic and calculations into a single object that can be queried like a table.</p>
        <p><b><u>Performance:</u></b> Views can improve query performance by pre-computing and caching results, especially for frequently used or complex queries.</p>
        <p><b><u>Modifiability:</u></b> Some views are updatable, meaning they can be used to insert, update, or delete rows from the underlying tables, provided certain conditions are met.</p>
        `,
        "tableRequired": false
    },
    {
        "code":` <h2>Creating Views</h2>
        <p>Here's how you can create a view in MySQL:</p>
        <h2>Syntax</h2>
        <p>
            <code>CREATE VIEW view_name AS SELECT column1, column2, ... FROM table_name WHERE condition;</code>
        </p>
        <p>
        <table class="extable">
            <caption>Example Table : student</caption>
        </table>
        </p>
        <h2>Query</h2>
        <p>CREATE VIEW failStudents AS SELECT * FROM student WHERE marks < 180;<br>
        Query OK, 0 rows affected (0.03 sec)<br><br>
        SELECT * FROM failStudents;
        <table>
            <tr>
                <th>RollNo</th>
                <th>Name</th>
                <th>PhoneNo</th>
                <th>Class</th>
                <th>Marks</th>
                <th>City</th>
            </tr>
            <tr>
                <td>4204</td>
                <td>Asha</td>
                <td>6259927794</td>
                <td>BCA-I</td>
                <td>156</td>
                <td>Haryana</td>
            </tr>
        </table>
        </p>
        `,
        "tableRequired" : true,
    },
    {
        "code":` <h2>Deleting Views</h2>
        <p>Here's how you can delete a view in MySQL:</p>
        <h2>Syntax</h2>
        <p>
            <code>DROP VIEW view_name;</code>
        </p>
        <p>
        <table>
            <caption>Example View : failStudents</captionn>
            <tr>
                <th>RollNo</th>
                <th>Name</th>
                <th>PhoneNo</th>
                <th>Class</th>
                <th>Marks</th>
                <th>City</th>
            </tr>
            <tr>
                <td>4204</td>
                <td>Asha</td>
                <td>6259927794</td>
                <td>BCA-I</td>
                <td>156</td>
                <td>Haryana</td>
            </tr>
        </table>
        </p>
        <h2>Query</h2>
        <p>DROP VIEW failStudents;<br><br>
        Query OK, 0 rows affected (0.01 sec)
        </p>
        `,
        "tableRequired" : false,
    },
    {
        "code":` <h2>Granting Permissions to users</h2>
        <p>In MySQL, the GRANT statement is used to grant specific privileges to database users or roles. These privileges can include various permissions such as SELECT, INSERT, UPDATE, DELETE, and more. Here's the basic syntax:</p>
        <h2>Syntax</h2>
        <p>
            <code>GRANT privileges ON database_name.table_name TO 'user'@'host';</code>
        </p>
        <p>Replace privileges with the specific privileges you want to grant, database_name.table_name with the name of the database and table (or * for all tables) you want to grant access to, and 'user'@'host' with the username and host for the user you want to grant access to.</p>
        <h2>Examples</h2>
        <p>1. Example to grant SELECT privileges on all tables in the school database to a user named 'john' from localhost:<br><br>GRANT SELECT ON school.* TO 'john'@'localhost';</p>
        <p>2. Example to grant multiple privileges at once:<br><br>GRANT SELECT, INSERT, UPDATE ON employees.* TO 'john'@'localhost';</p>
        <p>3. Example to grant all privileges on all tables in the school database to a user named 'john' from localhost:<br><br>GRANT ALL PRIVILEGES ON school.* TO 'john'@'localhost';</p>
        <p>4. Example to grant all privileges on all databases to a user named 'john' from localhost:<br><br>GRANT ALL PRIVILEGES ON *.* TO 'john'@'localhost';</p>`,
        "tableRequired" : false,
    },
    {
        "code":` <h2>Revoking Permissions from users</h2>
        <p>
        In MySQL, the REVOKE statement is used to revoke previously granted privileges from users or roles. It effectively removes specific privileges from a user, limiting their access to certain databases, tables, or columns. Here's the basic syntax:</p>
        <h2>Syntax</h2>
        <p>
            <code>REVOKE privileges ON database_name.table_name FROM 'user'@'host';</code>
        </p>
        <p>Replace privileges with the specific privileges you want to revoke, database_name.table_name with the name of the database and table (or * for all tables) you want to revoke access from, and 'user'@'host' with the username and host for the user you want to revoke access from.</p>
        <h2>Examples</h2>
        <p>1. Example to revoke SELECT privileges on all tables in the school database to a user named 'john' from localhost:<br><br>REVOKE SELECT ON school.* TO 'john'@'localhost';</p>
        <p>2. Example to revoke multiple privileges at once:<br><br>REVOKE SELECT, INSERT, UPDATE ON school.* TO 'john'@'localhost';</p>
        <p>3. Example to revoke all privileges on all tables in the school database to a user named 'john' from localhost:<br><br>REVOKE ALL PRIVILEGES ON school.* TO 'john'@'localhost';</p>
        <p>4. Example to revoke all privileges on all databases to a user named 'john' from localhost:<br><br>REVOKE ALL PRIVILEGES ON *.* TO 'john'@'localhost';</p>`,
        "tableRequired" : false,
    },
    {
        "code": `<h2>Transaction Management</h2>
        <p>Transaction management in MySQL allows you to group multiple SQL statements into a single unit of work, ensuring that either all the statements are executed successfully or none of them are applied. This helps maintain data integrity and consistency within the database. MySQL supports transaction management using the START TRANSACTION, COMMIT, and ROLLBACK statements.</p>
        <h2>Starting New Transaction:</h2>
        <p><code>START TRANSACTION;</code></p>
        <p>This statement marks the beginning of a transaction. It signifies the start of a sequence of SQL statements that will be treated as a single unit of work.</p>
        <h2>Commiting Changes in Transaction:</h2>
        <p><code>COMMIT;</code></p>
        <p>This statement permanently saves the changes made during the current transaction. Once committed, the changes become visible to other database sessions.</p>
        <h2>Roll back changes in Transaction:</h2>
        <p><code>ROLLBACK;</code></p>
        <p>This statement rolls back (undoes) any changes made during the current transaction. It effectively cancels the transaction and restores the database to its state before the transaction began.</p>
        
        `,
        "tableRequired": false
    },
    {
        "code":` <h2>Example of using Commit/Rollback</h2>
        <p>Here's an example of how you might use these statements together:</p>
        <p><table class="extable">
            <caption>Example Table : student</caption>
        </table>
        </p>
        <h2>Query</h2>
        <p>
            START TRANSACTION;<br><br>

            UPDATE student SET marks = marks + 10 where marks < 290;<br><br>
            COMMIT;<br><br>
            ROLLBACK;<br><br>
            SELECT * FROM student;
            <table>
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
                <td>256</td>
                <td>Punjab</td>
            </tr>
            <tr>
                <td>4203</td>
                <td>Aman</td>
                <td>7639927794</td>
                <td>BCA-I</td>
                <td>296</td>
                <td>Punjab</td>
            </tr>
            <tr>
                <td>4204</td>
                <td>Asha</td>
                <td>6259927794</td>
                <td>BCA-I</td>
                <td>166</td>
                <td>Haryana</td>
            </tr>
            </table>
        </p>
        <p>
            START TRANSACTION;<br><br>

            UPDATE student SET marks = marks + 10 where marks < 290;<br><br>
            ROLLBACK;<br><br>
            COMMIT;<br><br>
            SELECT * FROM student;
            <table Class="extable">
            </table>
        </p>
        `,
        "tableRequired" : true,
    },
    {
        "code":` <h2>Equi Join</h2>
        <p>Equi joins in SQL are a specific type of join where the condition for joining tables is based on the equality of values in specified columns. There are two main types of equi joins:</p>
        <p><b><u>Inner Equi Join : </u></b>An inner equi join returns only the rows that have matching values in both tables based on the specified join condition.</p>
        <h2>Syntax</h2>
        <p><code>SELECT columns FROM table1 INNER JOIN table2 ON table1.column_name = table2.column_name;</code></p>
        <p><b><u>Outer Equi Join : </u></b>An outer equi join returns all the rows from both tables, along with the matched rows based on the join condition.There are two types of outer equi joins: LEFT OUTER JOIN and RIGHT OUTER JOIN.</p>
        <h2>Syntax</h2>
        <p><code>SELECT columns FROM table1 LEFT OUTER JOIN table2 ON table1.column_name = table2.column_name;</code><br><br>
        OR<br><br>
        SELECT columns FROM table1 RIGHT OUTER JOIN table2 ON table1.column_name = table2.column_name;</code></p>
        <p><table class="custTable">
            <caption>Example Table : Customers</caption>
        </table>
        <table class="orderTable">
            <caption>Example Table : Orders</caption>
        </table>
        </p>
        <h2>Query</h2>
        <p>
        SELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate FROM Orders INNER JOIN Customers ON Orders.customerID=Customers.customerID;
        <table>
            <tr>
                <th>OrderID</th>
                <th>CustomerName</th>
                <th>OrderDate</th>
            </tr>
            <tr>
                <td>10308</td>
                <td>Anjali</td>
                <td>1996-09-18</td>
            </tr>
        </table>
        SELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate FROM Orders LEFT OUTER JOIN Customers ON Orders.customerID=Customers.customerID;
        <table>    
            <tr>
                <th>OrderID</th>
                <th>CustomerName</th>
                <th>OrderDate</th>
            </tr>
            <tr>
                <td>10308</td>
                <td>Anjali</td>
                <td>1996-09-18</td>
            </tr>
            <tr>
                <td>10309</td>
                <td>NULL</td>
                <td>1996-09-19</td>
            </tr>
            <tr>
                <td>10310</td>
                <td>NULL</td>
                <td>1996-09-20</td>
            </tr>
        </table>
        SELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate FROM Orders RIGHT OUTER JOIN Customers ON Orders.customerID=Customers.customerID;
        <table>    
            <tr>
                <th>OrderID</th>
                <th>CustomerName</th>
                <th>OrderDate</th>
            </tr>
            <tr>
                <td>NULL</td>
                <td>Abhishek</td>
                <td>NULL</td>
            </tr>
            <tr>
                <td>10308</td>
                <td>Anjali</td>
                <td>1996-09-18</td>
            </tr>
            <tr>
                <td>NULL</td>
                <td>Aman</td>
                <td>NULL</td>
            </tr>
        </table>
        </p>

        `,
        "tableRequired" : true,
    },
    {
        "code":` <h2>Cartesian Join</h2>
        <p>A Cartesian join, also known as a Cartesian product or cross join, is a join operation that returns the Cartesian product of the sets of rows from the joined tables. It means that it produces a result set in which each row from the first table is combined with every row from the second table. This type of join is less common and can result in a large result set, especially when joining tables with a large number of rows. There is essentially only one type of Cartesian join, but it can be performed using different syntax variations:</p>
        <h2>Syntax</h2>
        <p><code>SELECT columns FROM table1 CROSS JOIN table2;</code><br><br>
        
        <p><table class="custTable">
            <caption>Example Table : Customers</caption>
        </table>
        <table class="orderTable">
            <caption>Example Table : Orders</caption>
        </table>
        </p>
        <h2>Query</h2>
        <p>
        SELECT Customers.CustomerName, Orders.OrderID FROM Customers CROSS JOIN Orders;
        <table>
            <tr>
                <th>CustomerName</th>
                <th>OrderID</th>
            </tr>
            <tr>
                <td>Aman</td>
                <td>10308</td>
            </tr>
            <tr>
                <td>Anjali</td>
                <td>10308</td>
            </tr>
            <tr>
                <td>Abhishek</td>
                <td>10308</td>
            </tr>
            <tr>
                <td>Aman</td>
                <td>10309</td>
            </tr>
            <tr>
                <td>Anjali</td>
                <td>10309</td>
            </tr>
            <tr>
                <td>Abhishek</td>
                <td>10309</td>
            </tr>
            <tr>
                <td>Aman</td>
                <td>10310</td>
            </tr>
            <tr>
                <td>Anjali</td>
                <td>10310</td>
            </tr>
            <tr>
                <td>Abhishek</td>
                <td>10310</td>
            </tr>
        </table>
        </p>

        `,
        "tableRequired" : true,
    },
    {
        "code":` <h2>Outer Joins</h2>
        <p>Outer joins in SQL are used to retrieve data from multiple tables while also including unmatched rows from one or both tables in the result set. There are two main types of outer joins:</p>
        <p><b><u>LEFT OUTER JOIN (or LEFT JOIN) : </u></b>A left outer join returns all rows from the left table (the first table mentioned in the query), and the matched rows from the right table. If there are no matching rows in the right table, NULL values are returned for the columns from the right table.</p>
        <h2>Syntax</h2>
        <p><code>SELECT columns FROM table1 LEFT OUTER JOIN table2 ON table1.column_name = table2.column_name;</code></p>
        <p><b><u>RIGHT OUTER JOIN (or RIGHT JOIN) : </u></b>A right outer join returns all rows from the right table (the second table mentioned in the query), and the matched rows from the left table. If there are no matching rows in the left table, NULL values are returned for the columns from the left table.</p>
        <h2>Syntax</h2>
        <p><code>SELECT columns FROM table1 RIGHT OUTER JOIN table2 ON table1.column_name = table2.column_name;</code></p>
        <p><table class="custTable">
            <caption>Example Table : Customers</caption>
        </table>
        <table class="orderTable">
            <caption>Example Table : Orders</caption>
        </table>
        </p>
        <h2>Query</h2>
        <p>
        SELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate FROM Orders LEFT OUTER JOIN Customers ON Orders.customerID=Customers.customerID;
        <table>    
            <tr>
                <th>OrderID</th>
                <th>CustomerName</th>
                <th>OrderDate</th>
            </tr>
            <tr>
                <td>10308</td>
                <td>Anjali</td>
                <td>1996-09-18</td>
            </tr>
            <tr>
                <td>10309</td>
                <td>NULL</td>
                <td>1996-09-19</td>
            </tr>
            <tr>
                <td>10310</td>
                <td>NULL</td>
                <td>1996-09-20</td>
            </tr>
        </table>
        SELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate FROM Orders RIGHT OUTER JOIN Customers ON Orders.customerID=Customers.customerID;
        <table>    
            <tr>
                <th>OrderID</th>
                <th>CustomerName</th>
                <th>OrderDate</th>
            </tr>
            <tr>
                <td>NULL</td>
                <td>Abhishek</td>
                <td>NULL</td>
            </tr>
            <tr>
                <td>10308</td>
                <td>Anjali</td>
                <td>1996-09-18</td>
            </tr>
            <tr>
                <td>NULL</td>
                <td>Aman</td>
                <td>NULL</td>
            </tr>
        </table>
        </p>

        `,
        "tableRequired" : true,
    },
    {
        "code":` <h2>Self Join</h2>
        <p>A self-join is a type of join in SQL where a table is joined with itself. This is useful when you want to compare rows within the same table based on some condition. There are different types of self-joins, depending on the criteria used for comparison:</p>
        <h2>Syntax</h2>
        <p><code>SELECT columns FROM columns FROM table_name t1 JOIN table_name t2 ON t1.common_column = t2.common_column;;</code><br><br>
        
        <p><table class="custTable">
            <caption>Example Table : Customers</caption>
        </table>
        </p>
        <h2>Query</h2>
        <p>
        SELECT A.CustomerName AS CustomerName1, B.CustomerName AS CustomerName2 FROM Customers A, Customers B WHERE A.CustomerID <> B.CustomerID;
        <table>
            <tr>
                <th>CustomerName1</th>
                <th>CustomerName2</th>
            </tr>
            <tr>
                <td>Aman</td>
                <td>Abhishek</td>
            </tr>
            <tr>
                <td>Anjali</td>
                <td>Abhishek</td>
            </tr>
            <tr>
                <td>Aman</td>
                <td>Anjali</td>
            </tr>
            <tr>
                <td>Abhishek</td>
                <td>Anjali</td>
            </tr>
            <tr>
                <td>Anjali</td>
                <td>Aman</td>
            </tr>
            <tr>
                <td>Abhishek</td>
                <td>Aman</td>
            </tr>
        </table>
        </p>

        `,
        "tableRequired" : true,
    }
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