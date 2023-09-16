import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { initialprofile } from "@/lib/initial-profile";
import { IntialModal } from "@/components/modals/intial-moadal";

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

  return <IntialModal />;
};

export default SetupPage;
