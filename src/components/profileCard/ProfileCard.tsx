"use client";

interface ProfileCardProps {
  profile: {
    profileId: string;
    owner: string;
    name: string;
    createdAt: number;
    projectCount?: number;
    certificateCount?: number;
  };
}

export default function ProfileCard({ profile }: ProfileCardProps) {
  return (
    <div className="shadow-3xl shadow-shadow-500 relative mx-auto flex w-[400px] flex-col items-center rounded-[20px] bg-white bg-clip-border p-4">
      <div className="relative flex h-32 w-full justify-center rounded-xl bg-cover">
        <img
          src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/banner.ef572d78f29b0fee0a09.png"
          alt="banner"
          className="absolute flex h-32 w-full justify-center rounded-xl bg-cover"
        />
        <div className="dark:!border-navy-700 absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400">
          <img
            className="h-full w-full rounded-full"
            src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar11.1060b63041fdffa5f8ef.png"
            alt="avatar"
          />
        </div>
      </div>

      <div className="mt-16 flex flex-col items-center">
        <h4 className="text-xl font-bold text-black">{profile.name}</h4>
        <p className="text-base font-normal text-gray-600">
          {profile.owner.slice(0, 6)}...{profile.owner.slice(-4)}
        </p>
      </div>

      <div className="mt-6 mb-3 flex gap-14 md:gap-14">
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl font-bold text-black">
            {profile.projectCount || 0}
          </p>
          <p className="text-sm font-normal text-gray-600">Projects</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl font-bold text-black">
            {profile.certificateCount || 0}
          </p>
          <p className="text-sm font-normal text-gray-600">Certificates</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-sm font-normal text-gray-600">
            {new Date(profile.createdAt).toLocaleDateString()}
          </p>
          <p className="text-sm font-normal text-gray-600">Joined</p>
        </div>
      </div>
    </div>
  );
}
