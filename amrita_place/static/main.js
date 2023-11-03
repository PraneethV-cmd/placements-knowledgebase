// change navbar styles on scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})





// show/hide nav menu
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");


menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})


// close nav menu 
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav)


var placementData = [
    { year: "1995", students: 20, highestSalary: 3500000 },
    { year: "1996", students: 25, highestSalary: 3600000 },
    { year: "1997", students: 32, highestSalary: 3700000 },
    { year: "1998", students: 40, highestSalary: 3800000 },
    { year: "1999", students: 50, highestSalary: 3900000 },
    { year: "2000", students: 55, highestSalary: 4000000 },
    { year: "2001", students: 60, highestSalary: 4100000 },
    { year: "2002", students: 70, highestSalary: 4200000 },
    { year: "2003", students: 80, highestSalary: 4300000 },
    { year: "2004", students: 85, highestSalary: 4400000 },
    { year: "2005", students: 90, highestSalary: 4500000 },
    { year: "2006", students: 95, highestSalary: 4600000 },
    { year: "2007", students: 100, highestSalary: 4700000 },
    { year: "2008", students: 110, highestSalary: 4800000 },
    { year: "2009", students: 120, highestSalary: 4900000 },
    { year: "2010", students: 125, highestSalary: 5000000 },
    { year: "2011", students: 130, highestSalary: 5100000 },
    { year: "2012", students: 140, highestSalary: 5200000 },
    { year: "2013", students: 150, highestSalary: 5300000 },
    { year: "2014", students: 160, highestSalary: 5400000 },
    { year: "2015", students: 170, highestSalary: 5500000 },
    { year: "2016", students: 180, highestSalary: 5600000 },
    { year: "2017", students: 190, highestSalary: 5700000 },
    { year: "2018", students: 195, highestSalary: 5750000 },
    { year: "2019", students: 200, highestSalary: 5800000 },
    { year: "2020", students: 205, highestSalary: 5850000 },
    { year: "2021", students: 210, highestSalary: 5900000 },
    { year: "2022", students: 220, highestSalary: 6000000 },
    { year: "2023", students: 230, highestSalary: 6100000 }
];

var years = placementData.map(data => data.year);
var students = placementData.map(data => data.students);
var salaries = placementData.map(data => data.highestSalary);

var options = {
    chart: {
        type: 'area',
        height: 350,
        zoom: {
            enabled: false
        }
    },
    series: [
        {
            name: 'Number of Students',
            data: students,
          color: '#b10f56'
        },
        {
            name: 'Highest Salary (in INR)',
            data: salaries,
          color: '#D00846'
        }
    ],
    xaxis: {
        categories: years
    },
    stroke: {
        curve: 'smooth'
    },
    title: {
        text: 'Placement Data Over the Years',
        align: 'center'
    },
    dataLabels: {
        enabled: false
    },
    tooltip: {
        theme: 'light'
    }
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();