const dialog = {
  'underflowLevel': [
    {
      avatar: 'punk5950.png',
      alignment: 'left',
      text: `Ah Ethereum city, it's been a long time...`
    },
    {
      avatar: 'punk5950.png',
      alignment: 'left',
      text: 'Feels good to be back...'
    },
    {
      avatar: 'punk5950.png',
      alignment: 'left',
      text: 'Feels like home...'
    },
    {
      avatar: 'punk5950.png',
      alignment: 'left',
      text: 'I wonder if it is still ruled by the same fractions from back when I left...'
    },
    {
      avatar: 'punk5950.png',
      alignment: 'left',
      text: 'Maybe I can contact some of my old ... acquaintances.'
    },
    {
      avatar: 'punk5950.png',
      alignment: 'left',
      text: `I'll need to connect to the city network.`,
      choices: [{
        id: 'check-for-sites',
        buttonText: 'check for possible connection sites'
      }]
    },
    {
      avatar: 'punk5950.png',
      alignment: 'left',
      text: `Oh look, an old go client! Oh man, this is ancient! Let's see if it still works ...`,
      choices: [{
        id: 'check-for-sites',
        buttonText: 'open wrist terminal'
      }]
    },
    {
      avatar: 'old_gtx.png',
      alignment: 'right',
      text: 'Installing software to connect to adjacent network ...'
    },
    {
      avatar: 'old_gtx.png',
      alignment: 'right',
      text: 'Open a terminal and run the following instructions:',
      code: `
        $ git clone https://github.com/austintgriffith/scaffold-eth.git

        $ cd scaffold-eth

        $ git checkout clicker

        $ yarn install
      `,
      choices: [{
        id: 'continue',
        buttonText: 'Continue'
      }]
    },
    {
      avatar: 'old_gtx.png',
      alignment: 'right',
      text: 'Open 3 terminals from within the scaffold-eth folder and run the following instructions:',
      code: `
        # Terminal 1:
        $ yarn chain

        # Terminal 2:
        $ yarn deploy

        # Terminal 3:
        $ yarn start
      `,
      choices: [{
        id: 'done',
        buttonText: 'Done'
      }]
    },
    {
      avatar: 'old_gtx.png',
      alignment: 'right',
      text: 'Connection established! Loading human compatible interface...',
      wait: 5000
    },
    {
      avatar: 'old_gtx.png',
      alignment: 'right',
      text: 'Interface loaded!',
      choices: [{
        id: 'open-interface',
        buttonText: 'Open interface at http://localhost:3000'
      }]
    },
    {
      avatar: 'punk5950.png',
      alignment: 'left',
      text: `
        Looks like this is one of the old city token contracts.
        What is it doing out here?
      `
    },
  ],
  intro: [
    {
      avatar: 'punk5950.png',
      alignment: 'left',
      text: `It's been a long time...`
    },
    {
      avatar: 'punk5950.png',
      alignment: 'left',
      text: 'Crypto City.'
    },
    {
      avatar: 'punk5950.png',
      alignment: 'left',
      text: 'Where the central headquarter of the byzantine generals, NFT addicts and some of the largest mining districts in the world live side by side.'
    },
    {
      avatar: 'punk5950.png',
      alignment: 'left',
      text: 'Feels good to be back...'
    },
    {
      avatar: 'punk5950.png',
      alignment: 'left',
      text: 'Feels like home...'
    }
  ],
  welcomeCall: [
    {
      avatar: 'punk_anon.png',
      alignment: 'right',
      text: 'Hey! I heard you where back in town...'
    },
    {
      avatar: 'punk_anon.png',
      alignment: 'right',
      text: 'Listen - We need your help.'
    },
    {
      avatar: 'punk_anon.png',
      alignment: 'right',
      text: 'The byzantine generals are out of their minds!'
    },
    {
      avatar: 'punk_anon.png',
      alignment: 'right',
      text: 'Can you connect to the city network?'
    },
    {
      avatar: 'punk5950.png',
      alignment: 'left',
      text: 'Sure'
    }
  ]
}


 export default dialog
