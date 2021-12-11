/* 
    - Contains an array of JS objects which represent articles. Content
    is an array of strings which represent paragraphs inividually. There 
    are obviously better ways to do this, but this is a good place to start.
    - Makes our code more flexible and maintainable since we only have to change 
    one file to change something in the format of our article.
    - Notice that each of our projects have a name parameter, this is what 
    the unique string we'll use to match our URL parameters
    - And we also export our sample data at the bottom of the file to import
    into our ProjectsPage.
*/
const projects = [
    {
        name: 'sso-request',
        title: 'SSO Request Application',
        content: [
            `The SSO Request Application was a project I contributed towards while I was 
			employed as an Application Development intern at Pepperdine University 
			(Information & Technology Department). The application consisted of several form
			pages used to obtain relevant information from the user on applying for SSO 
			(Single-Sign-On) usage at the university.There is also a seperate view/interface
			created for authorized Application developers at the University to use so that they
			may manage the requests made in the application.`,
            `The application was developed using Microsoft's ASP.NET MVC 5 framework with a 
			SQL server backend, and is currently in production at the university. 
			A barebones-level look at the application (without any proprietary information 
			from my previous employer) is avaliable on my github:
            https://github.com/cameroncfranklin. I am now restructuring this webform application
            to be a component of my start-up website, TakeOver Sports.`,
        ]
    },    {
        name: 'task-updater',
        title: 'Twilio Chatbot Task Updater Application',
        content: [
            `The Twilio Task Updater Application was a project I independently developed while
			employed as an Application Development intern at Pepperdine University. `,
            `Twilio is the vendor that we used to power the University’s chatbot assistant. 
            Twilio has a component called Autopilot, which is responsible for matching human input 
            (in our case chat messages, but can also be speech) to predefined tasks. For example, 
            if a user types in “what are the library hours” or “how late is the library open” into 
            the chat, Autopilot will match this input to a predefined task called “Library_hours”, 
            which returns a JSON object instructing the chatbot to respond with library hours. 
            `,
            `Unfortunately, Twilio's interface for updating these tasks is relatively limited.
            You can’t look at all the tasks at once, you can’t search the contents of the tasks, 
            can’t bulk-update, etc. I was tasked with building a full-stack application with a better 
            interface and more CRUD capabilities, that would serve as an external updater for 
            managing these tasks. I built the application using Microsoft's ASP.NET MVC 5 Framework
            in Visual Studio, using C#, JavaScript, HTML/CSS, and some useful jQuery components. After
            finishing this internship, I am now in the process of repurposing this application to work 
            with my own chatbot for my start-up venture, TakeOver Sports. `,
        ]
    },     {
        name: 'iris',
        title: 'My U.S. Patent: IRIS',
        content: [
            `In January of 2020, I became a joint patent holder of a mobile proximity security
			system called IRIS.`,
            `IRIS is a small, attachable device anyone could hook onto a backpack or purse while 
            walking. It houses thermal and sonar sensors that are programmed to detect
            the presence of a (potential) incoming threat. These sensors communicate output via
            a bluetooth module. I lead the development of our mobile application, which takes 
            the data sent from the IRIS device (recieved from the Bluetooth module) and alerts 
            the user whether not any presences are within 30 feet of their current location.
            This invention is designed to be a personal proximity security system, that allows 
            people who are uncomfortable walking alone to have a safeguard of sorts. As mentioned, 
            myself along with a small group of co-inventors recieved a U.S. patent for this device, 
            and are currently in the process of seeking venture capitalist funding to put this 
            product out on the market. We did receive a $10,000 grant from Lemeleson-MIT in 2018, 
            after winning their InvenTeam Initative competition.`,
        ]
    },  
];

export default projects;