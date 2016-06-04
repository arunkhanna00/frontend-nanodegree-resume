var bio = {
    "name": "Arun Khanna",
    "role": "Full Stack Engineer",
    "contacts": {
        "mobile": "555-555-5555",
        "email": "arunkhanna00@gmail.com",
        "twitter": "@arunkhanna00",
        "github": "arunkhanna00",
        "location": "Santa Monica"
    },
    "bioPic": "images/fry.jpg",
    "welcomeMessage": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum ipsum dolor, aliquam lacinia est consectetur id. ",
    "skills": ["awesomess", "Hard Worker", "Fast Learner", "Proficiency in HTML, CSS, Javascript, Python, and Ruby"]
};

var education = {
    "schools": [
    {
        "name": "Santa Monica College",
        "location": "Santa Monica",
        "degree": "AS",
        "major": "Computer Science",
        "dates": "2016-2018"
    },
    {
        "name": "UC Berkeley",
        "location": "Berkeley",
        "degree": "BS",
        "major": "EECS",
        "dates": "2018-2020"
    }
    ],

    "onlineCourses": [
    {
        "title": "Full Stack Web Developer Nanodegree",
        "school": "Udacity",
        "date": "2016",
        "url": "https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd004"
    },
    {
        "title": "Senior Web Developer Nanodegree",
        "school": "Udacity",
        "date": "2016",
        "url": "https://www.udacity.com/course/senior-web-developer-nanodegree--nd802"
    },
    {
        "title": "Machine Learning Engineer Nanodegree",
        "school": "Udacity",
        "date": "2016",
        "url": "https://www.udacity.com/course/machine-learning-engineer-nanodegree--nd009"
    },
    {
        "title": "Full Stack Development Certification",
        "school": "FreeCodeCamp",
        "date": "2016",
        "url": "https://www.freecodecamp.com/"
    }]
};

var work = {
    "jobs": [
    {
        "employer": "Apple",
        "title": "Software Engineer",
        "location": "Cupertino",
        "dates": "2020-2022",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum ipsum dolor, aliquam lacinia est consectetur id. Nulla a tincidunt augue, porttitor malesuada erat. Vivamus eu tortor eget dolor facilisis pretium. Fusce ornare augue vitae eros congue maximus. Aenean tristique non sem non tincidunt. Donec cursus odio vitae ligula auctor pretium."
    },
    {
        "employer": "Google",
        "title": "Full Stack Engineer",
        "location": "Mountain View",
        "dates": "2022-2024",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum ipsum dolor, aliquam lacinia est consectetur id. Nulla a tincidunt augue, porttitor malesuada erat. Vivamus eu tortor eget dolor facilisis pretium. Fusce ornare augue vitae eros congue maximus. Aenean tristique non sem non tincidunt. Donec cursus odio vitae ligula auctor pretium."
    }]
};

var projects = {
    "projects": [
    {
        "title": "Project 1",
        "dates": "2016",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum ipsum dolor, aliquam lacinia est consectetur id. Nulla a tincidunt augue, porttitor malesuada erat. Vivamus eu tortor eget dolor facilisis pretium. Fusce ornare augue vitae eros congue maximus. Aenean tristique non sem non tincidunt. Donec cursus odio vitae ligula auctor pretium.",
        "images": [
            "http://placehold.it/400x200",
            "http://placehold.it/400x200"
            ]
    }]
};


bio.display = function() {
    var formattedHeaderName = HTMLheaderName.replace("%data%", bio.name);
    var formattedHeaderRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").prepend(formattedHeaderRole);
    $("#header").prepend(formattedHeaderName);
    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedTwitter);
    $("#topContacts").append(formattedGithub);
    $("#topContacts").append(formattedLocation);
    $("#header").append(formattedBioPic);
    $("#header").append(formattedWelcomeMsg);
    $("#header").append(HTMLskillsStart);
    bio.skills.forEach(function(skill) {
        var formattedSkill = HTMLskills.replace("%data%", skill);
        $("#skills").append(formattedSkill);
    });
}


work.display = function() {
    work.jobs.forEach(function(job) {
        var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedWorkTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedWorkDates = HTMLworkDates.replace("%data%", job.dates);
        var formattedWorkLocation = HTMLworkLocation.replace("%data%", job.location);
        var formattedWorkDescription = HTMLworkDescription.replace("%data%", job.description);
        $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last").append(formattedWorkEmployer + formattedWorkTitle);
        $(".work-entry:last").append(formattedWorkDates);
        $(".work-entry:last").append(formattedWorkLocation);
        $(".work-entry:last").append(formattedWorkDescription);
    });
}

projects.display = function() {
    projects.projects.forEach(function(project) {
        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
        var formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(formattedProjectTitle);
        $(".project-entry:last").append(formattedProjectDates);
        $(".project-entry:last").append(formattedProjectDescription);
        if (project.images.length > 0) {
            project.images.forEach(function(image) {
                var formattedProjectImage = HTMLprojectImage.replace("%data%", image);
                $(".project-entry:last").append(formattedProjectImage);
            });
        }
    });
}

education.display = function() {
    education.schools.forEach(function(school) {
        var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.major);
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
        $(".education-entry:last").append(formattedSchoolDates);
        $(".education-entry:last").append(formattedSchoolLocation);
        $(".education-entry:last").append(formattedSchoolMajor);
    });

    $("#education").append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(course) {
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", course.title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", course.school);
        var formattedOnlineDate = HTMLonlineDates.replace("%data%", course.date);
        var formattedOnlineTitle = formattedOnlineTitle.replace("#", course.url);
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
        $(".education-entry:last").append(formattedOnlineDate);
    });
}

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);
