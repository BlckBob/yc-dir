import { client } from "@/sanity/lib/client";
import Ping from "./Ping";
import { STARTUP_VIEWS_QUERY } from "@/sanity/lib/queries";
import { formatSingleView } from "@/lib/utils";
import { writeClient } from "@/sanity/lib/write-client";
import { unstable_after as after } from "next/server";

const View = async ({ id }: { id: string }) => {
  const { views: totalViews } = await client
    .withConfig({ useCdn: false })
    .fetch(STARTUP_VIEWS_QUERY, { id });

  after(
    async () =>
      await writeClient
        .patch(id)
        .set({ views: totalViews + 1 })
        .commit(),
  );

  return (
    <div className="view-container">
      <div className="absolute -right-2 -top-2">
        <Ping />
      </div>

      <p className="view-text">
        <span className="font-black">{formatSingleView(totalViews)}</span>
      </p>
    </div>
  );
};
export default View;
