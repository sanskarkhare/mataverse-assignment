const Moralis = require("moralis").default;
const { EvmChain } = require('@moralisweb3/common-evm-utils');


Moralis.start({
  apiKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6ImUyNGQ3NGI4LTdlMjEtNGU4Ni1iYjc1LWY3MzBiNzMzOGFlYSIsIm9yZ0lkIjoiMTIwNDU1IiwidXNlcklkIjoiMTIwMTAxIiwidHlwZUlkIjoiNzlmNmM5NDUtMzNkNC00ZTMxLWIzY2YtNDc2OGQ5MTBlNTE5IiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MDE5Mzg3MzksImV4cCI6NDg1NzY5ODczOX0.5DLZ2RhT-z2g04Q-MWofFWMwxJdqEE923vsz57z_-YA",
  
});

async function streams() {
    try {
      console.log('sk')
      
  
      const Contact_ABI = [{
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "phoneNo",
            "type": "uint256"
          }
        ],
        "name": "ContactAdded",
        "type": "event"
      }]; // valid abi of the event
      
      const options = {
        chains: [EvmChain.SEPOLIA], // list of blockchains to monitor
        description: "monitor all Contact added", // your description
        tag: "Contact_added", // give it a tag
        abi: Contact_ABI,
        includeContractLogs: true,
        allAddresses: false,
        topic0: ["ContactAdded(string,uint256)"], // topic of the event
        webhookUrl: "https://d11f-2405-201-3020-5af7-d8aa-4bba-7bb-b153.ngrok.io/webhook", // webhook url to receive events,
      };
      
      const streams = await Moralis.Streams.add(options);
      const {id} = streams.toJSON();
      
      const address = '0xa25cC1890Eb375993f0223Afc859d25bD979b4a0'
      console.log(id, ";)")
      await Moralis.Streams.addAddress({address, id});
  
      
    } catch (error) {
      console.log(error)
      throw new HttpException('Forbidden', 400);
    }
  }

  streams()