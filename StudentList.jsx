function StudentList() {
    const Students = [
        {
            id: 1,
            name: "LJU",
            Std: 4
        },
        {
            id: 2,
            name: "LJU",
            Std: 5
        },
        {
            id: 3,
            name: "LJU",
            Std: 6
        },
    ];

    return (
        <>
            <h1>Student Details</h1>
            {Students.filter((Student) => Student.Std === 5)
                .map((Student) => (
                    <div key={Student.id}>
                        <h2>Student Name: {Student.name.toUpperCase()}</h2>
                        <h3>Updated Standard: {Student.Std + 1}</h3>
                        <hr />
                    </div>
                ))
            }
        </>
    );
}

export default StudentList;
