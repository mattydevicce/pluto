var classroom = {
    'teacher': "Miss McGillucuddy",
    'class': "Grade 3",
    'students': [
        {
            'firstName': 'Joe',
            'lastName': 'Porfido',
            'age': 5,
            'hair': 'brown',
            'aspirations': ['Go to the moon', 'Meet George Clooney']
    },
        {
            'firstName': 'Sally',
            'lastName': 'Ray',
            'age': 6,
            'hair': 'brown',
            'aspirations': ['Eat a taco', 'Go to heaven']
    },
        {
            'firstName': 'Joey',
            'lastName': 'Bagadonuts',
            'age': 7,
            'hair': 'red',
            'aspirations': ['Drive a car', 'get an iPhone']
    },
        {
            'firstName': 'Larry',
            'lastName': 'Beans',
            'age': 10,
            'hair': 'black',
            'aspirations': ['Fly an airplane', 'Cancun for spring break']
    },
        {
            'firstName': 'Yvette',
            'lastName': 'Blahblahblah',
            'age': 8,
            'hair': 'brown',
            'aspirations': ['Get drunk this weekend', 'Go to General Assembly']
    }
 ]
}






/*
1) Use the map method to automatically create a 'fullname' field for each student in your class.



2) Use foreach to write two report methods: 

    a) Miss McGillucuddy, Grade 3
       Joe Porfido
       ...
       Yvette Blahblahblah


       
    b) Miss McGillucuddy, Grade 3
    
       Joe Porfido
       Age: 5  Hair: brown
       Aspirations: 
        - Go to the moon
        - Meet George Clooney
       Grades: 100, 80, 90, ...
       ...
       
       Yvette Blahblahblah
       Age: 8  Hair: brown
       Aspirations:
        - Get drunk this weekend
        - Go to General Assembly
       Grades: 100, 90, 95, ...



3) Use the filter method to create a new array of students with age grades < 8. Output the name of each of these students.



*/