package com.nodue.nodue.Service;

import com.nodue.nodue.model.Student;

import java.util.List;

public interface StudentService {
    public Student saveStudent(Student student);
    public List<Student> getAllStudents();

}
