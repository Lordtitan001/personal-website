import { ProjectCard } from '../Components/project-card/project-card.component';

export const first: ProjectCard = {
    name: 'Staff Gestion',
    description: `This project is a simple management employee software.
                    As an administrator you can create an employe through
                    a form and assign him to a supervisor. Every employe
                    has his own account he can use to check in and check out,
                    he can also see his timesheet and his salaries is calculated
                    automatically so he can have a track of how much he has
                    already earned.`,
    technologies: ['Java', 'Java Swing'],
    github: 'https://github.com/Lordtitan001/ProjetGestion/',
    link: ''
};

export const second: ProjectCard = {
    name: 'Path finding algorithm',
    description: `This is a path finding algorithm inspired by the
                    Dijkstra algorithm use to find the fastest one
                    of 3 robots present in the warehouse to assemble
                    a specific command. Every robot has a define speed
                    that decrease by a factor for every article he
                    his carrying and the robot can carry a specific
                    amount of weight. The warehouse is divided in multiple
                    sections all of them have a random number of each
                    article and all the section are distant by random
                    value.
                    `,
    technologies: ['Java'],
    github: 'https://github.com/Lordtitan001/Algorithm/tree/master/Path%20Finding%20Program',
    link: ''
};

export const third: ProjectCard = {
    name: 'Finite state machine',
    description: `This program is a simple finite state machine
                    use to create a autocomplete software based on
                    a dataset of words. This program take the user
                    input and find all the words that matches.`,
    technologies: ['Java', 'Java Swing'],
    github: 'https://github.com/Lordtitan001/Algorithm/tree/master/Automate%20state%20machine',
    link: ''
};

export const fourth: ProjectCard = {
    name: 'Image Filter',
    description: `This is a java client-server application use to apply
                    the Sobel filter to an image. Each client can create
                    an account and connect to the server through a web socket
                    if he knows the ip address of the server and the connexion
                    port. Then he cand choose and image and the process is
                    done automatically.
                    `,
    technologies: ['Java', 'Websocket'],
    github: 'https://github.com/Lordtitan001/reseau/tree/master/ImageFilter',
    link: ''
};

export const primary: ProjectCard = {
    name: 'Unilinks',
    description: `Unilinks is a web application for university events.
                    Students and associations in a university can create and share events.
                    The goal is to keep students up to date and allow student associations
                    to reach more students. And the Android version of the application is
                    available in the Playstore.
                    Unilinks is also a PWA and I used angular as Framework for
                    programming and Firebase to host and deploy the app then I used some
                    cordova plugins to build an android version.`,
    technologies: ['Angular', 'Typescript', 'Firebase', 'Cordova'],
    github: 'https://github.com/Lordtitan001/unilinks',
    link: 'https://unilinks.ca/tabs/acceuil'
};

export const secondary: ProjectCard = {
    name: 'Sketch&Draw',
    description: `Sketch&Draw is a web drawing application.
                    There are a large number of drawing tools available so you
                    can draw basic or more complex shapes and take advantage of
                    the different textures to create beautiful designs. While you
                    are drawing, your changes are saved automatically and when you
                    are finished, you can save your drawing, you can also download
                    it to your computer or send it by email.`,
    technologies: ['Angular', 'Typescript', 'MongoDB', 'NodeJS'],
    github: 'https://github.com/Lordtitan001/Sketch',
    link: ''
};

