//main route and nested route
export const routeLink = [
    {
        name: "হোম",
        path: "/",
    },
    {
        name: "নার্সারি",
        path: "/product-category",
        children: [
            {
                name: "ফল গাছ",
                path: "/ফল-গাছ",
                children: [
                    {
                        name: "দেশি ফল গাছ",
                        path: "/দেশি-ফল-গাছ",
                    },
                    {
                        name: "বিদেশি ফল গাছ",
                        path: "/বিদেশি-ফল-গাছ",
                    },
                    {
                        name: "বারমাসি ফল গাছ",
                        path: "/বারমাসি-ফল-গাছ",
                    },
                ],
            },
            {
                name: "ফুল গাছ",
                path: "/ফুল-গাছ",
            },
            {
                name: "শোভাময় গাছ",
                path: "/শোভাময়-গাছ",
            },
            {
                name: "ঔষধি গাছ",
                path: "/ঔষধি-গাছ",
            },
            {
                name: "মশলা জাতীয় গাছ",
                path: "/মশলা-জাতীয়-গাছ",
            },
            {
                name: "সবজি জাতীয় গাছ",
                path: "/সবজি-জাতীয়-গাছ",
            },
            {
                name: "গার্ডেনিং প্যাকেজ",
                path: "/গার্ডেনিং-প্যাকেজ",
            },
        ],
    },
    {
        name: "বাগান আনুষাঙ্গিক",
        path: "/bagan",
    },

    {
        name: "গার্ডেনিং টুলস",
        path: "/product-category/গার্ডেনিং-টুলস",
    },
    {
        name: "গার্ডেনিং প্যাকেজ",
        path: "/product-category/গার্ডেনিং-প্যাকেজ",
    },
    {
        name: "গার্ডেনিং সার্ভিস/মালি সেবা",
        path: "/service",
    },
];

//mobile navbar routes
export const navRoute = [
    {
        name: "ফল গাছ",
        path: "/ফল-গাছ",
        children: [
            {
                name: "দেশি ফল গাছ",
                path: "/দেশি-ফল-গাছ",
            },
            {
                name: "বিদেশি ফল গাছ",
                path: "/বিদেশি-ফল-গাছ",
            },
            {
                name: "বারমাসি ফল গাছ",
                path: "/বারমাসি-ফল-গাছ",
            },
            {
                name: "ফল গাছ প্যাকেজ",
                path: "/ফল-গাছ-প্যাকেজ",
            },
        ],
    },
    {
        name: "fol gas",
        path: "/fol-gas",
    },
    {
        name: "fol gas",
        path: "/fol-gas",
        children: [
            {
                name: "দেশি ফল গাছ",
                path: "/দেশি-ফল-গাছ",
            },
            {
                name: "বিদেশি ফল গাছ",
                path: "/বিদেশি-ফল-গাছ",
            },
            {
                name: "বারমাসি ফল গাছ",
                path: "/বারমাসি-ফল-গাছ",
            },
            {
                name: "ফল গাছ প্যাকেজ",
                path: "/ফল-গাছ-প্যাকেজ",
            },
        ],
    },
    {
        name: "fol gas",
        path: "/fol-gas",
    },
];

