document.addEventListener('DOMContentLoaded', function () {
    // Get the elements from the DOM
    const usernameEl = document.getElementById('username');
    const userIdEl = document.getElementById('user-id');
    const emailEl = document.getElementById('email');
    const numStudentsEl = document.getElementById('num-students');
    const chartEl = document.getElementById('chart');

    // Create a new ApexCharts instance
    const chart = new ApexCharts(chartEl, {
        chart: {
            type: 'area',
            height: 300,
            stacked: false,
            zoom: {
                enabled: false
            }
        },
        series: [
            {
                name: 'Google',
                data: [10, 15, 20, 25, 30, 2, 40, 45, 50, 55],
                color: '#b10f56',
                stroke: {
                    curve: 'smooth',
                },
            },
            {
                name: 'Microsoft',
                data: [5, 10, 5, 20, 5, 3, 35, 43, 22, 50],
                color: '#d00846',
                stroke: {
                    curve: 'smooth',
                },
            },
            {
                name: 'Amazon',
                data: [3, 6, 9, 12, 25, 8, 21, 29, 27, 30],
                color: '#f20536',
                stroke: {
                    curve: 'smooth',
                },
            },
        ],
        xaxis: {
            categories: ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5', 'Year 6', 'Year 7', 'Year 8', 'Year 9', 'Year 10'],
        },
        dataLabels: {
            enabled: false
        },
        title: {
            text: 'Students placed under his mentorship',
            align: 'center',
        }
    });

    // Get the user data
    fetch('https://example.com/user-data') // Replace with your actual data URL
        .then(response => response.json())
        .then(data => {
            // Set the user data
            usernameEl.textContent = data.username;
            userIdEl.textContent = data.userId;
            emailEl.textContent = data.email;
            numStudentsEl.textContent = data.numStudents;

            // Update the chart data
            chart.updateSeries([
                {
                    name: 'Google',
                    data: [data.numGoogleStudents],
                },
                {
                    name: 'Microsoft',
                    data: [data.numMicrosoftStudents],
                },
                {
                    name: 'Amazon',
                    data: [data.numAmazonStudents],
                },
            ]);
        });

    // Render the chart
    chart.render();

    // Change navbar styles on scroll
    window.addEventListener('scroll', () => {
        document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
    });

    // Show/hide nav menu
    const menu = document.querySelector(".nav__menu");
    const menuBtn = document.querySelector("#open-menu-btn");
    const closeBtn = document.querySelector("#close-menu-btn");

    menuBtn.addEventListener('click', () => {
        menu.style.display = "flex";
        closeBtn.style.display = "inline-block";
        menuBtn.style.display = "none";
    });

    // Close nav menu 
    const closeNav = () => {
        menu.style.display = "none";
        closeBtn.style.display = "none";
        menuBtn.style.display = "inline-block";
    }

    closeBtn.addEventListener('click', closeNav);

    // Section toggle
    const buttons = document.querySelectorAll('.section-toggle-button');
    const sections = document.querySelectorAll('.section');

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            // Remove 'active' class from all buttons
            buttons.forEach((btn) => btn.classList.remove('active'));

            // Hide all sections
            sections.forEach((section) => section.style.display = 'none');

            // Get the target section ID
            const target = button.getAttribute('data-target');

            // Add 'active' class to the clicked button
            button.classList.add('active');

            // Display the target section
            document.getElementById(target).style.display = 'block';
        });
    });

    // Set the initial section to 'bio'
    document.getElementById('bio').style.display = 'block';
    document.querySelector('.section-toggle-button[data-target="bio"]').classList.add('active');
});
