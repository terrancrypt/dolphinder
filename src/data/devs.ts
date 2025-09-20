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
        name: "Viet Hieu Dinh",
        username: "hieudepoet",
        avatar: "https://avatars.githubusercontent.com/u/59277071?v=4",
        github: "https://github.com/hieudepoet",
        linkedin: "https://www.linkedin.com/in/hieudepoet/",
        bio: "A relentless coder and football aficionado, dedicated to mastering both the digital and physical fields. Always striving for excellence and innovation.",
        slushWallet: "0x2cbd7fabd5ce146e0e48ca754a4c6c88e6cdbfa4bb2ca1beaabd5ea00c97bf9c",
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
        name: "Hoang Son",
        username: "Yi",
        avatar: "/avatar/Yi-avatar.png",
        github: "https://github.com/sonmessia",
        linkedin: "https://www.linkedin.com/in/mike-johnson",
        bio: "Backend | Passionate about blockchain, AI, and scalable systems.",
        slushWallet: "0x5678901234567890123456789012345678901234",
    },
    {
        name: "BLAN39",
        username: "AlairlacuaBlan",
        avatar: "/avatar/AlairlacuaBlan.jpeg",
        github: "https://github.com/AlairlacuaBlan",
        linkedin: "https://www.linkedin.com/in/%C4%91%C3%ACnh-sang-b1a968261/",
        bio: "Man of Means",
        slushWallet: "0x93daa4636ad94275bf5a13521dcba01f5e93e66a3fe10a06dc7e96156f5864e1",
    },
    {
        name: "Hữu Bảo",
        username: "huubao",
        avatar: "/avatar/huubao-avatar.jpg",
        github: "https://github.com/lehuubao1810",
        linkedin: "https://www.linkedin.com/in/lehuubao2909/",
        website: "https://lehuubao.vercel.app",
        bio: "I'm a Junior Developer with experience in React, Node.js, Next.js, and React Native. I'm passionate about expanding my skills in Web3 development.",
        slushWallet: "0xd21bc08c287ac02a995e00c121778e7c4d384547ed10e7940994157230d982d7",
    },
    {
        name: "Khoi Nguyen",
        username: "MrOctopus",
        avatar: "/avatar/khoi.jpg",
        github: "https://github.com/tpSpace",
        linkedin: "https://www.linkedin.com/in/nmvkhoi/",
        bio: "Never Settle - Eager to learn new things.",
        slushWallet:
            "0x903d678b7972c31068cf49e76981754074fe609e7c9f5e6a70d3fe7a0aa77fb2",
    },
    {
        name: "DKhoi",
        username: "ngo-d-khoi",
        avatar: "https://github.com/mike-johnson.png",
        github: "https://github.com/NgoDKhoi",
        linkedin: "https://www.linkedin.com/in/kh%C3%B4i-ng%C3%B4-737259336/",
        bio: "Sinh vien , newbie",
        slushWallet: "0x1584820bde6795d377e660080eb928934f1e24a0351e279205bbb6471c004025",
    },
    {
        name: "222tee",
        username: "teededung",
        avatar: "https://avatars.githubusercontent.com/u/9781158?v=4",
        github: "https://github.com/teededung",
        linkedin: "https://www.linkedin.com/in/tuan-anh-nguyen-990140157/",
        bio: "Full-Stack Web Developer & Sui Blockchain Builder.",
        slushWallet: "0x2290bae249486a402698286c85d57ff46d27bf79ad706543d84646ef03a00362",
    },
    {
        name: "Tuong Huynh",
        username: "huynhdieutuong",
        avatar: "/avatar/huynhdieutuong.jpeg",
        github: "https://github.com/huynhdieutuong",
        linkedin: "https://www.linkedin.com/in/huynhdieutuong/",
        bio: "Fullstack Web Developer",
        slushWallet: "0x3fdc826759d7aa26ca82777624f7adffd4b23be8a05c175fcfa3e2d47e77d719",
    },
    {
        name: "Dang Hoang Lam",
        username: "lamdanghoang",
        avatar: "https://avatars.githubusercontent.com/u/82764011?v=4",
        github: "https://github.com/lamdanghoang",
        linkedin: "https://www.linkedin.com/in/hoang-lam-dang-411aa7160/",
        bio: "Become a blockchain developer",
        slushWallet:
            "0x0794b3451c2fe7c83f7c4a105d412d23b9e79935ec8583af60e48f40566c0fdc",
    },
    {
        name: "Otis Tran",
        username: "otis-tran",
        avatar: "https://avatars.githubusercontent.com/u/193929605?v=4",
        github: "https://github.com/otis-tran",
        linkedin: "https://www.linkedin.com/in/otis-tran/",
        bio: "Mobile developer | Passionate about Web3 & Blockchain technology",
        slushWallet: "0xaebd8a3bc80ea711937bf1831cd5a97b6c166d591594cf87d6338ecd3f1a60fb",
    },
];

export default DEV_DATA;
