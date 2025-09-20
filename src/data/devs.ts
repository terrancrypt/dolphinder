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
        name: "Hulk",
        username: "hulk",
        avatar: "/avatar/hulk-avatar.png",
        github: "https://github.com/Huc06",
        linkedin: "https://www.linkedin.com/in/hulk-phuc-ha-84a685301/",
        bio: "This product offers a unique solution to a common problem.",
        slushWallet: "0xaea6f58e4261b34032934c6c20e0b5b4fd94bac2e86734e3f2d3d5856b443108",
    },
    {
        name: "Alvin Ichi",
        username: "alvin-ichi",
        avatar: "https://avatars.githubusercontent.com/u/48800728?s=96&v=4",
        github: "https://github.com/nhatlapross",
        linkedin: "https://www.linkedin.com/in/nguyen-ho%C3%A0ng-nhat-69b85b134/",
        bio: "Web2 developer go to web3.",
        slushWallet: "0x3808b95f4603b8140b5d2082d4d6970ded65f49dac8980db525fe6f0a0f05396",
    },
    {
        name: "Phuc Pham",
        username: "Phucpt05",
        avatar: "https://avatars.githubusercontent.com/u/166826058?s=96&v=4",
        github: "https://github.com/Phucpt05",
        linkedin: "https://www.linkedin.com/in/ph%E1%BA%A1m-ph%C3%BAc-34164b211/",
        bio: "I am a third-year university student passionate about Web3 and blockchain.",
        slushWallet: "0x3161f4083d09983b4fc68ea208bd2ea3616f1bf91e8fd9c5303552d5aa64af19",
    },
    {
        name: "Otis Tran",
        username: "otis-tran",
        avatar: "https://avatars.githubusercontent.com/u/193929605?v=4",
        github: "https://github.com/otis-tran",
        linkedin: "https://www.linkedin.com/in/otis-tran/",
        bio: "Passionate about Web3 & Blockchain technology",
        slushWallet: "0xaebd8a3bc80ea711937bf1831cd5a97b6c166d591594cf87d6338ecd3f1a60fb",
    },
];

export default DEV_DATA;