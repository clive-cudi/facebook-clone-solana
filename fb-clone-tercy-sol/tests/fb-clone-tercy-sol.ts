import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { FbCloneTercySol } from "../target/types/fb_clone_tercy_sol";

describe("fb-clone-tercy-sol", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.FbCloneTercySol as Program<FbCloneTercySol>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
