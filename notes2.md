# Midterm Study Guide
## Table of Contents

- [Kahoot](#kahoot)
- [Simple Console Commands](#simple-console-commands)
- [DNS](#dns)
- [HTML](#html)
- [CSS](#css)
- [JavaScript](#javascript)
## Kahoot

##### 1 - T/F You can use this CSS to load fonts from Google
![](https://images-cdn.kahoot.it/e407a005-28a4-436c-9710-26aee3c1e38a?auto=webp&width=1000)
-> correct -> True  

##### 2 - How will the "hello world" text be oriented?
![](https://images-cdn.kahoot.it/20cd1ae0-4ee3-4acc-9db4-6e0485f49c35?auto=webp&width=1000)
+ A) One line saying Hello World
+ B) Two lines, with the first line saying Hello and the second saying World
+ C) correct: Two lines, with the first line saying World and the second saying Hello
+ D) One line saying World Hello

##### 3 - The CSS property padding:
![](https://images-cdn.kahoot.it/b4f23963-bf3b-472b-b990-10ae8f61bad5?auto=webp&width=1000)
+ A) correct: Puts space around the content of selected elements
+ B) Puts space around the border of selected elements
+ C) Puts space around the margin of selected elements
+ D) Puts space around the HTML document

##### 4 - Executing the following will output:
![](https://images-cdn.kahoot.it/ab4a3cab-5b91-4a86-8e05-710e601705ac?auto=webp&width=1000)
+ A) 3
+ B) correct: 4
+ C) undefined
+ D) 2

##### 5 - In HTML, what does <div> do?
+ A) correct -> Creates a division element
+ B) Creates a dividend element
+ C) Creates a divider element
+ D) Creates a divinity element

##### 6 - What is the order of the CSS box model, starting from the outside going in?
+ border, padding, margin, content
+ content, margin, border, padding
+ padding, margin, border, content
+ correct -> margin, border, padding, content

##### 7 - What does the following code output?
![](https://images-cdn.kahoot.it/b575bfc2-2296-4879-9609-8e550f900cb3?auto=webp&width=1000)
+ ['cow', 'rat', fish']
+ ['fish']
+ ['cow', 'fish']
+ correct -> ['rat', 'fish']

##### 8 - What does the following code output?
![](https://images-cdn.kahoot.it/bb5e65e6-8855-4376-9a14-a5a40ba123a9?auto=webp&width=1000)
+ cowratfish
+ cow,rat,fish
+ correct -> cow:rat:fish
+ ['cow', 'rat', 'fish']

##### 9 - What does the following code output?
![](https://images-cdn.kahoot.it/70dfbff7-5d45-428a-bb6e-af9fe9201a0c?auto=webp&width=1000)
+ [1, 2, 3]
+ ['1', '2', '3']
+ correct -> ['a1', 'a2', 'a3']
+ [66, 67, 68]

##### 10 - What does the following code do?
![](https://images-cdn.kahoot.it/8c549ad0-e536-4b3b-b9b9-f4927d1e2f9b?auto=webp&width=1000)
+ correct -> Adds a mouseover event listener to a p element
+ Adds a mouseover event listener to all p elements
+ Prints mouseover to console.log when a p element renders
+ Adds p.mouseover to console.log events

##### 11 - What is the HTML tag for an unordered list?

+ \<ol>
+ correct -> \<ul>
+ \<dt>
+ \<li>

##### 12 - Which of the following is NOT a valid JavaScript function?

+ correct -> function f(x) = {}
+ const f = (x) => {}
+ function f(x) {}
+ const f = function(x) {}

##### 13 - Which of the following is NOT a valid way to include JavaScript in HTML?

+ \<script>1+1</script>
+ \<script src='main.js' />
+ \<div onclick='1+1' />
+ correct -> \<javascript>1+1</javascript>

##### 14 - Which of the following is a valid JavaScript object?

+ correct -> { n:1 }
+ { n=1 }
+ { "n"=1}
+ { "n"="1" }

##### 15 - What does the DOM textContent property do?

+ Sets the Child HTML for an element
+ correct -> Sets the child text for the an element
+ Sets the content spacing for the element
+ Sets the text content for the entire DOM

##### 16 - Which HTML will create a valid hyperlink?

+ \<a src='https://c.com'>x</a>
+ \<link src='https://c.com'>x</link>
+ correct -> \<a href='https://c.com'>x</a>
+ \<link href='https://c.com'>x</link>

##### 17 - Using CSS, how would you turn only the BYU text blue?
![](https://images-cdn.kahoot.it/0df1aac4-009c-49ef-9ac3-3e12b00a82cb?auto=webp&width=1000)
  
+ div { color: blue; }
+ div.header { color: blue; }
+ correct -> div#header { color: blue; }
+ header { color: blue; }

##### 18 - Which of the following is valid JSON?

+ {'x':3}
+ {"x":undefined}
+ {x:3}
+ correct -> {"x":3}

##### 19 - The following console command makes a script executable:

+ correct -> chmod +x deploy.sh
+ ls -la deploy.sh
+ ssh deploy.sh
+ sudo deploy.sh

##### 20 - Which of the following is a DNS subdomain?
  
+ byu.edu
+ edu
+ correct -> c260.cs.byu.edu
+ byu

##### 21 - To point to another DNS record, you should use the following DNS record type:
+ A
+ correct -> CNAME
+ SOA
+ TXT

##### 22 - What will the following output?
![](https://images-cdn.kahoot.it/2190cbae-7213-437e-8981-09d5846c8c3e?auto=webp&width=1000)
+ taco burger shake salad noodles fries
+ correct -> burger fries taco shake noodles
+ burger fries taco shake salad noodles
+ taco burger shake salad noodles salad fries

##### 23 - What will the following output?
![](https://images-cdn.kahoot.it/23f674a9-8d2f-4bc3-a358-852c63e25498?auto=webp&width=1000)
+ A D B C
+ correct -> A D B
+ A B D
+ A B D C

## Simple Console Commands

1. **ls**:
   - Command to list files and directories in the current directory.
   - Example: `ls -l` (lists files in long format)

2. **cd**:
   - Command to change directories.
   - Example: `cd directory_name`

3. **mkdir**:
   - Command to create a new directory.
   - Example: `mkdir new_directory`

4. **rm**:
   - Command to remove files or directories.
   - Example: `rm file.txt` (remove a file)

5. **cp**:
   - Command to copy files or directories.
   - Example: `cp file.txt destination_directory`

6. **mv**:
   - Command to move or rename files or directories.
   - Example: `mv file.txt new_name.txt` (renames a file)

7. **pwd**:
   - Command to print the current working directory.
  
- **echo**: Command to display text or variables.
- **ls -la**: Command to list files and directories in long format.
- **git add**: Command to stage changes for commit in Git.
- **git status**: Command to display the state of the working directory and the staging area in Git.
- **git commit**: Command to record changes to the repository in Git.
- **git log**: Command to view commit history in Git.
- **cat**: Command to display the contents of a file.
- **git checkout**: Command to switch branches or restore working tree files in Git.
- **git diff/head merge**: Command to view changes between commits, branches, or files in Git.
- **clone**: Command to clone a repository into a new directory.
- **push**: Command to push local changes to a remote repository.
- **fetch**: Command to retrieve new data from a remote repository.
- **pull**: Command to fetch and integrate changes from a remote repository.
- **echo**: Output the parameters of the command
- **cd**: Change directory
- **mkdir**: Make directory
- **rmdir**: Remove directory
- **rm**: Remove file(s)
- **mv**: Move file(s)
- **cp**: Copy files
- **ls**: List files
- **curl**: Command line client URL browser
- **grep**: Regular expression search
- **find**: Find files
- **top**: View running processes with CPU and memory usage
- **df**: View disk statistics
- **cat**: Output the contents of a file
- **less**: Interactively output the contents of a file
- **wc**: Count the words in a file
- **ps**: View the currently running processes
- **kill**: Kill a currently running process
- **sudo**: Execute a command as a super user (admin)
- **ssh**: Create a secure shell on a remote computer
- **scp**: Securely copy files to a remote computer
- **history**: Show the history of commands
- **ping**: Check if a website is up
- **tracert**: Trace the connections to a website
- **dig**: Show the DNS information for a domain
- **man**: Look up a command in the manual

You can also chain the input and output of commands using special characters:

- `|`: Take the output from the command on the left and pipe, or pass, it to the command on the right
- `>`: Redirect output to a file. Overwrites the file if it exists
- `>>`: Redirect output to a file. Appends if the file exists

For example, you can list the files in a directory, pipe it into grep to search for files created in Nov, and then pipe that into wc to count the number of files found with a date of Nov.

```bash
ls -l | grep ' Nov ' | wc -l

***To navigate to the parent directory in the command line, use the command `cd ..`***

### Notes:
- Use caution with `rm` as it permanently deletes files and directories.

## DNS

### Concepts:
1. **Domain Name System (DNS)**:
   - Hierarchical decentralized naming system for computers, services, or resources connected to the internet or a private network.

2. **DNS Records**:
   - A (Address) Record: Maps a domain to an IP address.
   - CNAME (Canonical Name) Record: Alias of one domain to another.
   - MX (Mail Exchange) Record: Specifies the mail server responsible for receiving email.
   - SOA (Start of Authority) Record: Specifies authoritative information about a DNS zone.

3. **DNS Resolution**:
   - Process of translating domain names to IP addresses.

### Commands:
1. **dig**:
   - Command-line tool for querying DNS name servers.
   - Example: `dig example.com`

## HTML
1. **HyperText Markup Language (HTML)**:
   - Standard markup language for creating web pages and web applications.

2. **HTML Elements**:
   - `<div>`: Defines a division or section.
   - `<a>`: Defines a hyperlink.
   - `<img>`: Embeds an image.
   - `<p>`: Defines a paragraph.

3. **HTML Attributes**:
   - `href`: Specifies the URL of the linked resource (for `<a>` elements).
   - `src`: Specifies the URL of the image source (for `<img>` elements).

## CSS
1. **Cascading Style Sheets (CSS)**:
   - Style sheet language used for describing the presentation of a document written in HTML.

2. **CSS Selectors**:
   - Class Selector: Selects elements with a specific class attribute.
   - ID Selector: Selects a single element with a specific id attribute.
   - Element Selector: Selects elements based on their element type.

3. **CSS Properties**:
   - `color`: Sets the text color.
   - `font-size`: Sets the font size.
   - `margin`: Sets the margin around an element.
   - `padding`: Sets the padding inside an element.


## JavaScript

1. **JavaScript**:
   - High-level, interpreted programming language used to create interactive effects within web browsers.

2. **Variables**:
   - `var`, `let`, `const`: Keywords used to declare variables.

3. **Functions**:
   - `function`: Keyword used to define a function.
   - Arrow Functions: Shorter syntax for writing functions.

4. **Asynchronous JavaScript**:
   - `async`/`await`: Keywords used for asynchronous programming.

5. **DOM Manipulation**:
   - Document Object Model (DOM): Represents the structure of HTML documents.
   - `document.querySelector()`: Method to select a single element from the DOM.
