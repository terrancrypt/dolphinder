"use client";
import React, { useEffect, useState, type FC } from "react";
import { GlobalSuiProvider } from "./providers/GlobalSuiProvider";
import ProfileCard from "./profileCard/ProfileCard";
import { getAllProfilesWithDetails } from "@/lib/getProfiles";

const DeveloperBubbleWrapper = () => {
  return (
    <GlobalSuiProvider>
      <DeveloperBubble />
    </GlobalSuiProvider>
  );
};

const DeveloperBubble: FC = () => {
  const [profiles, setProfiles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getListProfiles();
  }, []);

  const getListProfiles = async () => {
    try {
      setLoading(true);
      const data = await getAllProfilesWithDetails(
        "0x9215a17a03e197cf55f482829f4b07c33555f2580e8906dadf566a2077baa5f0"
      );
      console.log("Profiles with details:", data);
      setProfiles(data);
    } catch (error) {
      console.error("Error loading profiles:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading profiles...</div>;
  }

  if (profiles.length === 0) {
    return <div>No profiles found</div>;
  }

  return (
    <div className="grid grid-cols-12 gap-4">
      {profiles.map(profile => (
        <div className="col-span-12 lg:col-span-3" key={profile.profileId}>
          <ProfileCard
            profile={{
              profileId: profile.profileId,
              owner: profile.owner,
              name: profile.name,
              createdAt: profile.createdAt,
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default DeveloperBubbleWrapper;
