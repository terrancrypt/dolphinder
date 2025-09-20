type Dev = {
    name: string;
    username: string;
    avatar?: string;
    github: string;
    linkedin?: string;
    website?: string;
    bio?: string;
    slushWallet?: string;
};

const DEV_DATA: Dev[] = [
    {
        name: "Trần Quốc Cường",
        username: "rosettyluvhenny@gmail.com",
        avatar: "/data/images.png",
        github: "https://github.com/Rosettyluvhenny",
        linkedin: "https://www.linkedin.com/in/c%C6%B0%E1%BB%9Dng-tr%E1%BA%A7n-5bb31225b/",
        bio: "This product offers a unique solution to a common problem.",
        slushWallet: "0x6d3bf16e92bbb9841f5f931d8cf6a2b5aaca13a9be6a20206e5971a910258d6b",
    },
];

export default DEV_DATA;