from sqlalchemy import Column, Integer, String, DateTime, Text, ForeignKey, Boolean
from sqlalchemy.orm import relationship, Mapped, mapped_column
from database import Base
from sqlalchemy.sql import func


class Student(Base):
    __tablename__ = 'students'
    id = Column(Integer, primary_key=True)
    firstname = Column(String(100), nullable=False)
    lastname = Column(String(100), nullable=False)
    email = Column(String(80), unique=True, nullable=False)
    age = Column(Integer)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    bio = Column(Text)
    course_id = mapped_column(ForeignKey("courses.course_id"))

    courses = relationship("Courses", back_populates="students")
    phone_numbers = relationship("PhoneNumber", cascade="all, delete-orphan", back_populates="student")
    interview_experiences = relationship("InterviewExperience", backref="student")
    student_degree_holders = relationship("StudentDegreeHolder", cascade="all, delete-orphan", back_populates="student")

    def __init__(self, firstname, lastname):
        self.firstname = firstname
        self.lastname = lastname

    def __repr__(self):
        return f'<Student {self.id}>'


class Courses(Base):
    __tablename__ = "courses"
    course_id = Column(Integer, primary_key=True)
    course_name = Column(String(100), nullable=False)

    students = relationship("Student", back_populates="courses")

    def __init__(self, course_name):
        self.course_name = course_name

    def __repr__(self):
        return f'<Course {self.course_id}>'


class PhoneNumber(Base):
    __tablename__ = "phone_number"
    id = Column(Integer, primary_key=True)
    roll_number = Column(Integer, ForeignKey("students.id"))
    phone_number = Column(String(20))

    student = relationship("Student", back_populates="phone_numbers")

    def __init__(self, phone_number):
        self.phone_number = phone_number

    def __repr__(self):
        return f'<PhoneNumber {self.phone_number}>'


class Company(Base):
    __tablename__ = "company"
    company_id = Column(Integer, primary_key=True)
    logo = Column(String(255))
    name = Column(String(100), nullable=False)

    interview_experiences = relationship("InterviewExperience", backref="company")

    def __init__(self, name, logo):
        self.name = name
        self.logo = logo

    def __repr__(self):
        return f'<Company {self.company_id}>'


class Degree(Base):
    __tablename__ = "degree"
    program_id = Column(Integer, primary_key=True)
    name = Column(String(100), nullable=False)
    branch = Column(String(100))

    student_degree_holders = relationship("StudentDegreeHolder", cascade="all, delete-orphan", back_populates="degree")

    def __init__(self, name, branch):
        self.name = name
        self.branch = branch

    def __repr__(self):
        return f'<Degree {self.program_id}>'


class InterviewExperience(Base):
    __tablename__ = "interview_experience"
    interview_id = Column(Integer, primary_key=True)
    positive_points = Column(Text)
    is_job_secured = Column(Boolean)
    improvements = Column(Text)
    roll_number = Column(Integer, ForeignKey("students.id"))
    company_id = Column(Integer, ForeignKey("company.company_id"))

    student = relationship("Student", back_populates="interview_experiences")
    company = relationship("Company", back_populates="interview_experiences")

    def __init__(self, positive_points, is_job_secured, improvements):
        self.positive_points = positive_points
        self.is_job_secured = is_job_secured
        self.improvements = improvements

    def __repr__(self):
        
