INSERT INTO company(logo,name) VALUES ("images/company/boogle.png", "Boogle"),("images/company/macrohard.png","Macrohard");
INSERT INTO student(rollNo,emailId,name,linkedInProfile,salary,CGPA,companyId,adminId) VALUES ("CB.EN.U4CSE22206","cb.en.u4cse22206@cb.students.amrita.edu","Ananthakrishnan","https://www.linkedin.com/in/ananthakrishnan-balajee?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",50000,9.39,1,1),("CB.EN.U4CSE22223","cb.en.u4cse22223","Jaiaditya","https://www.linkedin.com/in/jai-aditya-44773b229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",25000,7.34,2,2);
INSERT INTO phonenumber(rollNumber,phoneNumber) VALUES ("CB.EN.U4CSE22206","9988776655"),("CB.EN.U4CSE22223","9966770022");
INSERT INTO degree(programId,name,branch) VALUES ("UGTECH1","B.Tech.","CSE"),("UGTECH2","B.Tech.","AIE");
INSERT INTO interviewexperience(positivepoints,isJobSecured,improvements,rollNumber,companyId) VALUES ("It was a nice interview","Yes","None","CB.EN.U4CSE22206","1"),("I liked how friendly the interviewers were","No","Could focus more on projects done","CB.EN.U4CSE22223",1);
INSERT INTO studentdegreeholder(rollNumber,programmeId) VALUES ("CB.EN.U4CSE22206","UGTECH1"),("CB.EN.U4CSE22223","UGTECH2");
