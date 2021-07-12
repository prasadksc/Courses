
const courses = [
    {
        id: "5b21ca3eeb7f6fbccd471815",
        title: "Web development",
        image: "https://trainings.internshala.com/static/images/home/web-development.jpg",
        description: "Learn how to create a website from scratch",
        duration: 6,
        rating: 4,
        about: "This course is designed to start you on a path toward future studies in web development and design, no matter how little experience or technical knowledge you currently have. The web is a very big place, and if you are the typical internet user, you probably visit several websites every day, whether for business, entertainment or education. But have you ever wondered how these websites actually work? How are they built? How do browsers, computers, and mobile devices interact with the web? What skills are necessary to build a website? With almost 1 billion websites now on the internet, the answers to these questions could be your first step toward a better understanding of the internet and developing a new set of internet skills.  By the end of this course you’ll be able to describe the structure and functionality of the world wide web, create dynamic web pages using a combination of HTML, CSS, and JavaScript, apply essential programming language concepts when creating HTML forms, select an appropriate web hosting service, and publish your webpages for the world to see. Finally, you’ll be able to develop a working model for creating your own personal or business websites in the future and be fully prepared to take the next step in a more advanced web development or design course or specialization.",
        skills: "HTML, CSS, JAVASCRIPT"
    },
    {
        id: "5b21ca3eeb7f6fbccd4718899",
        title: "Python",
        image: "https://trainings.internshala.com/static/images/home/python.jpg",
        description: "Develop programs to gather, clean, analyze, and visualize data.",
        duration: 6,
        rating: 4,
        about: "This Specialization builds on the success of the Python for Everybody course and will introduce fundamental programming concepts including data structures, networked application program interfaces, and databases, using the Python programming language. In the Capstone Project, you’ll use the technologies learned throughout the Specialization to design and create your own  applications for data retrieval, processing, and visualization.",
        skills: "Python Programming, Python Syntax And Semantics,Database (DBMS), Data Structure, "
    },
    {
        id: "5b21ca3eeb7f6fbccqddv8899",
        title: "Ethical Hacking",
        image: "https://trainings.internshala.com/static/images/home/hacking.jpg",
        description: "Learn to hack and secure web applications",
        duration: 8,
        rating: 4,
        about: "Basics of Information Security and Computer Networking,Information Gathering and Basics of Web Development,Advanced Web Application Attacks,Client Side Attacks,Identifying Security Misconfigurations and Exploiting Outdated Web Applications,Documenting and Reporting Vulnerabilities",
        skills: "Information Security and Computer Networking, Client side attacks"
    },
    {
        id: "5b21ca3eeb7f6fbccd47898899",
        title: "Andriod App Development",
        image: "https://trainings.internshala.com/static/images/home/android.jpg",
        description: "Build your own ordering app",
        duration: 8,
        rating: 3,
        about: "Learn XML and Kotlin and how to put them together to build your own Zomato, Instagram or any other app",
        skills: "Expertise in Java, Kotlin or Both Vital Android SDK concepts Decent Experience with SQL,Knowledge of getByTitle,XML Basics,Understanding of Material Design Guidelines,Android Studio,Backend Programming Skills"
    },
    {
        id: "5b21ca3eeb7f6fbccd4789753899",
        title: "Core Java",
        image: "https://trainings.internshala.com/static/images/home/java.jpg",
        description: "Develop system applications from scratch",
        duration: 8,
        rating: 3,
        about: "Whether it's Android apps, web applications, banking, or trading software, Java is used everywhere! So, adding it to your toolbox is a must.Simple syntax and strong community support makes Java a language that is easy for beginners to learn.The average salary for a Java developer is 6.3LPA+ according to Indeed.The average salary for a Java developer is 6.3LPA+ according to Indeed.",
        skills: "Leveraging basic concepts, Object Oriented programming, java app development"
    },
    {
        id: "5b21ca3eeb7f6fbccd4sfsf8899",
        title: "React",
        image: "https://trainings.internshala.com/static/images/home/react.jpg",
        description: "Master the front-end powerhouse used to build seamles applications",
        duration: 6,
        rating: 5,
        about: "Efficient, flexible, and impactful; React is every developer's go-to choice for front end development.Want to know the best practices, latest developments or fixes for your code? Millions of developers are there to help you out! Facebook, Netflix, Instagram, and many other companies, big and small, prefer React. Need we say more?",
        skills: "basics of reacts,react hooks,build chat application"
    },
    {
        id: "5b21ca3eefsfsb7f6fbccd4sfsf8899",
        title: "Data Science",
        image: "https://trainings.internshala.com/static/images/home/data-science.jpg",
        description: "Learn the ABC's of Data science",
        duration: 10,
        rating: 5,
        about: "his Specialization covers the concepts and tools you'll need throughout the entire data science pipeline, from asking the right kinds of questions to making inferences and publishing results. In the final Capstone Project, you’ll apply the skills learned by building a data product using real-world data. At completion, students will have a portfolio demonstrating their mastery of the material. ",
        skills: "Github , Machine learning, R programming, Debugging, Data manipulation"
    },
    {
        id: "5b21cahjfdkseb7f6fbccd4sfsf8899",
        title: "Angular",
        image: "https://trainings.internshala.com/static/images/home/angular.jpg",
        description: "Learn Angular and create your own social blogging website",
        duration: 12,
        rating: 5,
        about: "Do you want to write powerful, maintainable, and testable front end applications faster and with less code? Then consider joining this course to gain skills in one of the most popular Single Page Application (SPA) frameworks today, AngularJS. Developed and backed by Google, AngularJS is a very marketable skill to acquire.In this course, we will explore the core design of AngularJS 1.x (latest version of AngularJS 1), its components and code organization techniques. We will enhance the functionality of our web app by utilizing dependency injection to reuse existing services as well as write our own. We will create reusable HTML components that take advantage of AngularJS data binding as well as extend HTML syntax with a very powerful feature of AngularJS called directives. We’ll set up routing so our SPA can have multiple views. We will also learn how to unit test our functionality. At the end of this course, you will build a fully functional, well organized and tested web application using AngularJS and deploy it to the cloud.",
        skills: "Unit Testing, Javascript, Angularjs,Web development"
    }


]


export function getCourses() {
    return courses;
}

