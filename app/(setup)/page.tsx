import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { initialprofile } from "@/lib/initial-profile";

const SetupPage = async () => {
  const profile = await initialprofile();

  const server = await db.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  if (server) {
    redirect(`/server/${server.id}`);
  }

  return <div>Create server</div>;
};

export default SetupPage;
