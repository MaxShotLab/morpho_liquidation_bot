import { base, mainnet, arbitrum } from "viem/chains";

import { katana } from "./chains/katana";
import type { Config } from "./types";

export const chainConfigs: Record<number, Config> = {
  [mainnet.id]: {
    chain: mainnet,
    morpho: {
      address: "0xBBBBBbbBBb9cC5e90e3b3Af64bdAF62C37EEFFCb",
      startBlock: 18883124,
    },
    adaptiveCurveIrm: {
      address: "0x870aC11D48B15DB9a138Cf899d20F13F79Ba00BC",
      startBlock: 18883124,
    },
    metaMorphoFactories: {
      addresses: [
        "0x1897A8997241C1cD4bD0698647e4EB7213535c24",
        "0xA9c3D3a366466Fa809d1Ae982Fb2c46E5fC41101",
      ],
      startBlock: 18925584,
    },
    preLiquidationFactory: {
      address: "0x6FF33615e792E35ed1026ea7cACCf42D9BF83476",
      startBlock: 21414664,
    },
    wNative: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    options: {
      vaultWhitelist: [
        "0xDCD35020c5bB97016358578131f012Baa9F53cf3",
        "0xc2007A9c48Eecb36868Cf9D1da5D8566e90bf042",
        "0x90880852B607065152360aB718b8a7a6bA979281"
      ],
      additionalMarketsWhitelist: [
        "0x37e7484d642d90f14451f1910ba4b7b8e4c3ccdd0ec28f8b2bdb35479e472ba7",
        "0xd0e50cdac92fe2172043f5e0c36532c6369d24947e40968f34a5e8819ca9ec5d"
      ],
      checkProfit: true,
      liquidationBufferBps: 50,
    },
  },
  [base.id]: {
    chain: base,
    morpho: {
      address: "0xBBBBBbbBBb9cC5e90e3b3Af64bdAF62C37EEFFCb",
      startBlock: 13977148,
    },
    adaptiveCurveIrm: {
      address: "0x46415998764C29aB2a25CbeA6254146D50D22687",
      startBlock: 13977152,
    },
    metaMorphoFactories: {
      addresses: [
        "0xFf62A7c278C62eD665133147129245053Bbf5918",
        "0xA9c3D3a366466Fa809d1Ae982Fb2c46E5fC41101",
      ],
      startBlock: 13978134,
    },
    preLiquidationFactory: {
      address: "0x8cd16b62E170Ee0bA83D80e1F80E6085367e2aef",
      startBlock: 23779056,
    },
    wNative: "0x4200000000000000000000000000000000000006",
    options: {
      vaultWhitelist: [
        "0xfc8a325A2403CD940649B48ffcDfC250e084A27C",
        "0xBf1E66A36646Bb589199aa24e67EbDcDBEb452A1",
        "0x2C6F29324b0D915Fa2b0875633b018263113F54E"
      ],
      additionalMarketsWhitelist: [
        "0x1c21c59df9db44bf6f645d854ee710a8ca17b479451447e9f56758aee10a2fad",
        "0x9103c3b4e834476c9a62ea009ba2c884ee42e94e6e314a26f04d312434191836",
        "0x8793cf302b8ffd655ab97bd1c695dbd967807e8367a65cb2f4edaf1380ba1bda",
        "0x13c42741a359ac4a8aa8287d2be109dcf28344484f91185f9a79bd5a805a55ae",
        "0x3a4048c64ba1b375330d376b1ce40e4047d03b47ab4d48af484edec9fec801ba",
        "0x84662b4f95b85d6b082b68d32cf71bb565b3f22f216a65509cc2ede7dccdfe8c"
      ],
      checkProfit: true,
    },
  },
  [arbitrum.id]: {
    chain: arbitrum,
    morpho: {
      address: "0x6c247b1F6182318877311737BaC0844bAa518F5e",
      startBlock: 296446593 ,
    },
    adaptiveCurveIrm: {
      address: "0x66F30587FB8D4206918deb78ecA7d5eBbafD06DA",
      startBlock: 296446593,
    },
    metaMorphoFactories: {
      addresses: [
        "0x878988f5f561081deEa117717052164ea1Ef0c82",
      ],
      startBlock: 296447195,
    },
    preLiquidationFactory: {
      address: "0x635c31B5DF1F7EFbCbC07E302335Ef4230758e3d",
      startBlock: 307326238,
    },
    wNative: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
    options: {
      vaultWhitelist: ["0x5579e27129110bBC9c0eC1388aCBf7ad04771b76"],
      additionalMarketsWhitelist: [
        "0x33e0c8ab132390822b07e5dc95033cf250c963153320b7ffca73220664da2ea0",
        "0x77fe2f7c2dd6f4da6bc5f445b06052ff8df55cb70cfce9afc16ec3c69a5fd3a3",
        "0xe6392ff19d10454b099d692b58c361ef93e31af34ed1ef78232e07c78fe99169",
        "0xca83d02be579485cc10945c9597a6141e772f1cf0e0aa28d09a327b6cbd8642c",
      ],
      checkProfit: true,
    },
  }
};
