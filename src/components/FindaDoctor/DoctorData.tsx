const doctorData = [
    {
        "First Name": "Taha",
        "Last Name": "Ahmed",
        "Degree": "M.D.",
        "Gender": "M",
        "Languages": ["English", "Arabic", "Spanish"],
        "Specialty": "Pediatrician",
        "Organization": "HAVEN PEDIATRICS AND ADOLESCENT CARE, INC.",
        "Address": {
            "Street": "4950 San Bernardino Street",
            "Suite": "Suite 216",
            "City": "Montclair",
            "State": "CA",
            "Zip": "91763"
        },
        "Phone": "(909) 399-5944",
        "Fax": "(909) 399-5669"
    },
    {
        "First Name": "Taha",
        "Last Name": "Ahmed",
        "Degree": "M.D.",
        "Gender": "M",
        "Languages": ["English", "Arabic", "Spanish"],
        "Specialty": "Pediatrician",
        "Organization": "HAVEN PEDIATRICS AND ADOLESCENT CARE, INC.",
        "Address": {
            "Street": "10837 Laurel Street",
            "Suite": "Suite 104",
            "City": "Rancho Cucamonga",
            "State": "CA",
            "Zip": "91730"
        },
        "Phone": "(909) 941-9955",
        "Fax": "(909) 941-9966"
    },
    {
        "First Name": "Sabah",
        "Last Name": "Ahmed",
        "Degree": "M.D.",
        "Gender": "F",
        "Languages": ["English"],
        "Specialty": "Family Medicine",
        "Organization": "Desert Valley Medical Group, Inc., dba Chino Valley Primary Care",
        "Address": {
            "Street": "5450 Jefferson Avenue",
            "Suite": "Suite 3",
            "City": "Chino",
            "State": "CA",
            "Zip": "91710"
        },
        "Phone": "(909) 464-8722",
        "Fax": "(909) 464-8737"
    },
    {
        "First Name": "Sachin",
        "Last Name": "Chatta",
        "Degree": "M.D.",
        "Gender": "M",
        "Languages": ["English"],
        "Specialty": "Internal Medicine",
        "Organization": "Cajon Medical Group PC",
        "Address": {
            "Street": "12555 Central Avenue",
            "Suite": "Suite A",
            "City": "Chino",
            "State": "CA",
            "Zip": "91710"
        },
        "Phone": "(909) 735-2446",
        "Fax": "(909) 206-1553"
    },
    {
        "First Name": "Balu",
        "Last Name": "Gadhe",
        "Degree": "M.D.",
        "Gender": "M",
        "Languages": ["English"],
        "Specialty": "Internal Medicine",
        "Organization": "Cajon Medical Group PC",
        "Address": {
            "Street": "12555 Central Avenue",
            "Suite": "Suite A",
            "City": "Chino",
            "State": "CA",
            "Zip": "91710"
        },
        "Phone": "(909) 735-2446",
        "Fax": "(909) 206-1553"
    },
    {
        "First Name": "Maria",
        "Last Name": "Garcia De Benitez",
        "Degree": "M.D.",
        "Gender": "F",
        "Languages": ["English"],
        "Specialty": "Internal Medicine",
        "Organization": "Cajon Medical Group PC",
        "Address": {
            "Street": "12555 Central Avenue",
            "Suite": "Suite A",
            "City": "Chino",
            "State": "CA",
            "Zip": "91710"
        },
        "Phone": "(909) 735-2446",
        "Fax": "(909) 206-1553"
    },
    {
        "First Name": "Laurentiu",
        "Last Name": "Istrate",
        "Degree": "M.D.",
        "Gender": "M",
        "Languages": ["English"],
        "Specialty": "Family Medicine",
        "Organization": "Cajon Medical Group PC",
        "Address": {
            "Street": "12555 Central Avenue",
            "Suite": "Suite A",
            "City": "Chino",
            "State": "CA",
            "Zip": "91710"
        },
        "Phone": "(909) 735-2446",
        "Fax": "(909) 206-1553"
    },
    {
        "First Name": "Jose",
        "Last Name": "Lira",
        "Degree": "M.D.",
        "Gender": "M",
        "Languages": ["English", "Spanish"],
        "Specialty": "Internal Medicine",
        "Organization": "MY FAMILY MEDICAL GROUP",
        "Address": {
            "Street": "5475 Walnut Avenue",
            "City": "Chino",
            "State": "CA",
            "Zip": "91710"
        },
        "Phone": "(909) 591-6446",
        "Fax": "(909) 591-1309"
    },
    {
        "First Name": "Hedy",
        "Last Name": "Loa",
        "Degree": "M.D.",
        "Gender": "F",
        "Languages": ["English", "Indonesian"],
        "Specialty": ["Internal Medicine", "Geriatric Medicine"],
        "Organization": "MY FAMILY MEDICAL GROUP",
        "Address": {
            "Street": "1131 W. Sixth Street",
            "Suite": "Suite 150",
            "City": "Ontario",
            "State": "CA",
            "Zip": "91762"
        },
        "Phone": "(909) 482-4462",
        "Fax": "(909) 482-4485"
    },
    {
        "First Name": "Hetalben",
        "Last Name": "Makwana",
        "Degree": "M.D.",
        "Gender": "F",
        "Languages": ["English", "Hindi", "Gujarati"],
        "Specialty": "Internal Medicine",
        "Organization": "MY FAMILY MEDICAL GROUP",
        "Address": {
            "Street": "9190 Haven Avenue",
            "Suite": "Suite 102",
            "City": "Rancho Cucamonga",
            "State": "CA",
            "Zip": "91730"
        },
        "Phone": "(909) 981-0989",
        "Fax": "(909) 949-6214"
    },
    {
        "First Name": "Usha",
        "Last Name": "Mantha",
        "Degree": "M.D.",
        "Gender": "F",
        "Languages": ["English", "Hindi", "Telugu"],
        "Specialty": "Family Medicine",
        "Organization": "MY FAMILY MEDICAL GROUP",
        "Address": {
            "Street": "1131 W. Sixth Street",
            "Suite": "Suite 150",
            "City": "Ontario",
            "State": "CA",
            "Zip": "91762"
        },
        "Phone": "(909) 482-4462",
        "Fax": "(909) 482-4485"
    },
    {
        "First Name": "Avani",
        "Last Name": "Patel Shah",
        "Degree": "M.D.",
        "Gender": "F",
        "Languages": ["English", "Gujarati", "Spanish"],
        "Specialty": "Internal Medicine",
        "Organization": "MY FAMILY MEDICAL GROUP",
        "Address": {
            "Street": "5475 Walnut Avenue",
            "City": "Chino",
            "State": "CA",
            "Zip": "91710"
        },
        "Phone": "(909) 591-6446",
        "Fax": "(909) 591-1309"
    },
    {
        "First Name": "Venkata",
        "Last Name": "Pulakanti",
        "Degree": "M.D.",
        "Gender": "M",
        "Languages": ["English", "Hindi", "Telugu"],
        "Specialty": "Internal Medicine",
        "Organization": "MY FAMILY MEDICAL GROUP",
        "Address": {
            "Street": "9190 Haven Avenue",
            "Suite": "Suite 102",
            "City": "Rancho Cucamonga",
            "State": "CA",
            "Zip": "91730"
        },
        "Phone": "(909) 296-7800",
        "Fax": "(909) 509-5511"
    },
    {
        "First Name": "Nayan",
        "Last Name": "Shah",
        "Degree": "M.D.",
        "Gender": "M",
        "Languages": ["English", "Telegu"],
        "Specialty": "Family Medicine",
        "Organization": "MY FAMILY MEDICAL GROUP",
        "Address": {
            "Street": "5475 Walnut Avenue",
            "City": "Chino",
            "State": "CA",
            "Zip": "91710"
        },
        "Phone": "(909) 591-6446",
        "Fax": "(909) 591-1309"
    },
    {
        "First Name": "Asha",
        "Last Name": "Singh",
        "Degree": "M.D.",
        "Gender": "F",
        "Languages": ["English"],
        "Specialty": "Internal Medicine",
        "Organization": "MY FAMILY MEDICAL GROUP",
        "Address": {
            "Street": "1131 W. Sixth Street",
            "Suite": "Suite 150",
            "City": "Ontario",
            "State": "CA",
            "Zip": "91762"
        },
        "Phone": "(909) 482-4462",
        "Fax": "(909) 482-4485"
    },
    {
        "First Name": "Arnold",
        "Last Name": "Starkman",
        "Degree": "M.D.",
        "Gender": "M",
        "Languages": ["English", "Spanish"],
        "Specialty": "Family Medicine",
        "Organization": "HAVEN PEDIATRICS AND ADOLESCENT CARE, INC.",
        "Address": {
            "Street": "4950 San Bernardino Street",
            "Suite": "Suite 216",
            "City": "Montclair",
            "State": "CA",
            "Zip": "91763"
        },
        "Phone": "(909) 399-5944",
        "Fax": "(909) 399-5669"
    },
    {
        "First Name": "Arnold",
        "Last Name": "Starkman",
        "Degree": "M.D.",
        "Gender": "M",
        "Languages": ["English", "Spanish"],
        "Specialty": "Family Medicine",
        "Organization": "HAVEN PEDIATRICS AND ADOLESCENT CARE, INC.",
        "Address": {
            "Street": "10837 Laurel Street",
            "Suite": "Suite 104",
            "City": "Rancho Cucamonga",
            "State": "CA",
            "Zip": "91730"
        },
        "Phone": "(909) 941-9955",
        "Fax": "(909) 941-9966"
    }
]
