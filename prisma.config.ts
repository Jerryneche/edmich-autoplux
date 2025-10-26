import { defineConfig } from "@prisma/config";

export default defineConfig({
  seed: {
    run: async () => {
      const { main } = await import("./prisma/seed");
      await main();
    },
  },
});
